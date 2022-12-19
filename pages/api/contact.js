import { connectDatabase, insertDocument } from "../../lib/dbUtil";

async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ error: "Invalid form values!" });
      return;
    }

    const newMessageObj = { email, name, message };

    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Connecting to the database failed!" });
      return;
    }

    try {
      const result = await insertDocument(client, "contacts", newMessageObj);
      newMessageObj._id = result.insertedId;

      res.status(201).json({
        message: "Data sent successfully!",
        data: result,
        comment: newMessageObj,
      });
    } catch (error) {
      res.status(422).json({ message: "Couldn't insert in DB!" });
      return;
    }

    client.close();
  }
}
export default handler;

import { useState, useEffect } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

async function sendContactData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
}

export default function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState("");
  const [requestError, setRequestError] = useState("");

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event) {
    event.preventDefault();
    //* add client-side validation

    setRequestStatus("pending");

    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });

      setRequestStatus("success");
      setEnteredEmail("");
      setEnteredMessage("");
      setEnteredName("");
    } catch (error) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  }

  let notificationData;
  if (requestStatus === "pending") {
    notificationData = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  } else if (requestStatus === "success") {
    notificationData = {
      status: "success",
      title: "Thanks for your response...",
      message: "Message has been sent to us!",
    };
  } else if (requestStatus === "error") {
    notificationData = {
      status: "error",
      title: "Something went wrong...",
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can i help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
              placeholder="example@mail.com"
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            rows="5"
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
            placeholder="Enter your feedback"
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notificationData && (
        <Notification
          status={notificationData.status}
          title={notificationData.title}
          message={notificationData.message}
        />
      )}
    </section>
  );
}

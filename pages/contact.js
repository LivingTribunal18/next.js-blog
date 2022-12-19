import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../components/contact/contactForm";

export default function ContactPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Contact me</title>
        <meta
          name="description"
          content="Send your offer about Next.js project!"
        />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

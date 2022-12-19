import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero(props) {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/hero.jpg"
          width={300}
          height={300}
          alt="profile"
          layout="responsive"
          quality={100}
        />
      </div>
      <h1>Hello there!</h1>
      <p>Welcome to my portfolio-blog about Fullstack Development.</p>
    </section>
  );
}

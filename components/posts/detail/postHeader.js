import Image from "next/image";
import classes from "./postHeader.module.css";

export default function PostHeader(props) {
  return (
    <header className={classes.header}>
      <h1>{props.title}</h1>
      <Image src={props.image} alt={props.title} width={200} height={150} />
    </header>
  );
}

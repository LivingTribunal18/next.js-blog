import Link from "next/link";
import Image from "next/image";
import classes from "./postItem.module.css";

export default function PostItem(props) {
  const { item } = props;
  const formattedDate = new Date(item.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${item.slug}/${item.image}`;
  const linkPath = `/posts/${item.slug}`;

  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={item.title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <h3>{item.title}</h3>
            <time>{formattedDate}</time>
            <p>{item.excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

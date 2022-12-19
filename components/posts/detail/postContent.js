import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import nightOwl from "react-syntax-highlighter/dist/cjs/styles/prism/night-owl";
import js from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";

import PostHeader from "./postHeader";
import classes from "./postContent.module.css";

import dynamic from "next/dynamic";
const ReactMarkdown = dynamic(() => import("react-markdown"), { ssr: false });

SyntaxHighlighter.registerLanguage("js", js);

export default function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === "img") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1]; // className="language-js" => extract the "js"
      return (
        <SyntaxHighlighter
          style={nightOwl}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/posts/allPosts";
import { getAllPosts } from "../../lib/postsUtil";

export default function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Programming posts</title>
        <meta
          name="description"
          content="Posts about Next.js and how to learn this React framework"
        />
      </Head>
      <AllPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
    revalidate: 180,
  };
}

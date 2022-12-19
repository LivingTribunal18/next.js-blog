import Head from "next/head";
import { Fragment } from "react";
import { getFeaturedPosts } from "../lib/postsUtil";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featuredPosts";

export default function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Blog about Next.js React Framework" />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
}

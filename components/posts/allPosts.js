import classes from "./allPosts.module.css";
import PostsGrid from "./postsGrid";

export default function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h2>All posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

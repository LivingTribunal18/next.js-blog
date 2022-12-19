import PostItem from "./postItem";
import classes from "./postsGrid.module.css";

export default function PostsGrid(props) {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} item={post} />
      ))}
    </ul>
  );
}

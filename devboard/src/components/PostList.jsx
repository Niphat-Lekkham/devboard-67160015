import PostCard from "./PostCard";
import PostCount from "./PostCount";

function PostList({ posts }) {
  return (
    <div>
      <h2>โพสต์ล่าสุด</h2>

     <PostCount count={posts.length} />

      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
    </div>
  );
}

export default PostList;
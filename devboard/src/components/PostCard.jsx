import { useState } from "react";
import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import CommentList from "./CommentList";

function PostCard({ post }) {
  const { favorites, toggleFavorite } = useFavorites(); // ✅ เพิ่ม
  const isFavorite = favorites.includes(post.id);       // ✅ เพิ่ม
  const [showComments, setShowComments] = useState(false);

  return (
    <div
      style={{
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
        padding: "1rem",
        marginBottom: "1rem",
        background: "white",
      }}
    >
      <h3 style={{ margin: "0 0 0.5rem" }}>
        <Link
          to={`/posts/${post.id}`}
          style={{ color: "#1e40af", textDecoration: "none" }}
        >
          {post.title}
        </Link>
      </h3>

      <p style={{ margin: "0 0 0.75rem", color: "#4a5568" }}>
        {post.body}
      </p>

      <div style={{ display: "flex", gap: "0.5rem" }}>

        {/* ❤️ ปุ่มถูกใจ */}
        <button onClick={() => toggleFavorite(post.id)}>
          {isFavorite ? "❤️ ถูกใจแล้ว" : "🤍 ถูกใจ"}
        </button>

        {/* 💬 ปุ่มคอมเมนต์ */}
        <button onClick={() => setShowComments(prev => !prev)}>
          {showComments ? "▲ ซ่อน" : "▼ ดูความคิดเห็น"}
        </button>
      </div>

      {showComments && <CommentList postId={post.id} />}
    </div>
  );
}

export default PostCard;
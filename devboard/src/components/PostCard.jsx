function PostCard({ title, body }) {
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
      <h3 style={{ color: "#1e40af" }}>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

export default PostCard;
function UserCard({ name, email }) {

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div style={{
      display: "flex",
      gap: "1rem",
      border: "1px solid #e2e8f0",
      padding: "1rem",
      marginBottom: "0.5rem"
    }}>

      <div style={{
        width: "40px",
        height: "40px",
        background: "#1e40af",
        color: "white",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        {initials}
      </div>

      <div>
        <div>{name}</div>
        <div style={{ fontSize: "0.8rem" }}>{email}</div>
      </div>

    </div>
  );
}

export default UserCard;
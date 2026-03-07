function Navbar({favoriteCount}) {
  return (
    <nav
      style={{ background: "#1e40af", color: "white", padding: "1rem 2rem" }}
    >
      <div>
        <h1 style={{ margin: 0 }}>DevBoard</h1>
        <p style={{ margin: 0 }}>กระดานนักพัฒนา</p>
      </div>
      {favoriteCount > 0 && (
        <div
          style={{
            background: "#e53e3e",
            borderRadius: "20px",
            padding: "0.25rem 0.75rem",
            fontSize: "0.9rem",
            fontWeight: "bold",
          }}
        >
          ❤️ {favoriteCount} ถูกใจ
        </div>
      )}
    </nav>
  );
}

export default Navbar;

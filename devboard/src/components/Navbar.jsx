import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

function Navbar() {
  const { favorites } = useFavorites(); 

  return (
    <nav
      style={{
        background: "#1e40af",
        color: "white",
        padding: "1rem 2rem",
        display: "flex",                 
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* ✅ เปลี่ยนเป็น Link */}
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <div>
          <h1 style={{ margin: 0 }}>DevBoard</h1>
          <p style={{ margin: 0 }}>กระดานนักพัฒนา</p>
        </div>
      </Link>

      {/* ✅ เมนู */}
      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          หน้าหลัก
        </Link>

        <Link to="/profile" style={{ color: "white", textDecoration: "none" }}>
          สมาชิก
        </Link>

        {/* ✅ ใช้ favorites.length แทน favoriteCount */}
        <Link
          to="/favorites"
          style={{
            color: "white",
            textDecoration: "none",
            background: favorites.length > 0 ? "#e53e3e" : "transparent",
            padding: "0.25rem 0.75rem",
            borderRadius: "20px",
            fontSize: "0.9rem",
          }}
        >
          ❤️ ถูกใจ {favorites.length > 0 && `(${favorites.length})`}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

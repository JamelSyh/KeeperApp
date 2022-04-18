import React from "react";
import { useNavigate, Link } from "react-router-dom";
import HighLight from "@mui/icons-material/Highlight";

function Header() {
  let navigate = useNavigate();

  return (
    <header>
      <Link to="/">
        <h1>
          <HighLight />
          Keeper
        </h1>
      </Link>

      <div>
        <button className="login" onClick={() => navigate("/login")}>
          login
        </button>
        <button className="register" onClick={() => navigate("/register")}>
          sign up
        </button>
      </div>
    </header>
  );
}

export default Header;

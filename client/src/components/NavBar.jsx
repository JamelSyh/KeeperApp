import { useNavigate } from "react-router-dom";

import HighLight from "@mui/icons-material/Highlight";

export default function NavBar() {
  let navigate = useNavigate();
  return (
    <nav className=" navbar navbar-expand-lg navbar-light bg-Warning ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <HighLight />
          Keeper
        </a>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className=" nav-flex collapse navbar-collapse  "
          id="navbarSupportedContent"
        >
          <button
            className="btn login"
            onClick={() => {
              navigate("/login");
            }}
          >
            login
          </button>
          <button
            className=" btn register"
            onClick={() => {
              navigate("/register");
            }}
          >
            sign up
          </button>
        </div>
      </div>
    </nav>
  );
}

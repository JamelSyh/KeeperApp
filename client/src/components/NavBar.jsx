import { useNavigate } from "react-router-dom";

import HighLight from "@mui/icons-material/Highlight";

export default function NavBar() {
  let navigate = useNavigate();
  return (
    <nav class=" navbar navbar-expand-lg navbar-light bg-Warning ">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <HighLight />
          Keeper
        </a>
        <button
          class="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class=" nav-flex collapse navbar-collapse  "
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

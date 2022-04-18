import React from "react";
import Header from "../components/Header";

const Login = () => {
  return (
    <>
      <Header />
      <div className="bigContainer">
        <div className="fromContainer">
          <form action="action_page.php" method="post">
            <div class="container">
              <label for="uname">
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                required
              />

              <label for="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                required
              />

              <button type="submit">Login</button>
              <label>
                <input type="checkbox" checked="checked" name="remember" />{" "}
                Remember me
              </label>
            </div>

            <div class="container" style={{ backgroundColor: "#f1f1f1" }}>
              <button type="button" class="cancelbtn">
                Cancel
              </button>
              <span class="psw">
                Forgot <a href="/">password?</a>
              </span>
            </div>
          </form>
          <div className="btnContainer">
            <div id="myDiv" class="animate-bottom">
              <div id="Loginbuttons">
                <button class="button Google">
                  <span>Continue with google </span>
                  <img
                    alt="google img"
                    src="images/googleImg.webp"
                    id="googleLogo"
                  ></img>
                </button>
              </div>
            </div>
            <div id="myDiv" class="animate-bottom">
              <div id="Loginbuttons">
                <button class="button Facebook">
                  <span>Continue with Facebook</span>
                  <i class="fab fa-facebook-square"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

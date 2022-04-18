import React from "react";

const Register = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossorigin="anonymous"
      />
      <div className="bigContainer">
        <div className="fromContainer">
          <form action="" method="post">
            <label for="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />
            <label for="uname">
              <b>email</b>
            </label>
            <input
              type="email"
              placeholder="Enter email"
              name="mail"
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

            <button type="submit">Register</button>
            <label>
              <input type="checkbox" checked="checked" name="remember" />{" "}
              Remember me
            </label>

            <div class="container" style={{ backgroundColor: "#f1f1f1" }}>
              <button type="button" class="cancelbtn">
                Cancel
              </button>
            </div>
          </form>
          <div className="btnContainer">
            <div id="myDiv" class="animate-bottom">
              <div id="Loginbuttons">
                <button class="button Google">
                  <span>Continue with google </span>
                  <img src="images/googleImg.webp" id="googleLogo"></img>
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

export default Register;

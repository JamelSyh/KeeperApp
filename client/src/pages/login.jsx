import React, { useState } from "react";
import Header from "../components/Header";
import * as api from "../api/users";

const Login = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setUserInfo((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  const submitLogin = async (userInfo) => {
    const response = await api.postLogin(newNote);
    setUserInfo((prevNotes) => {
      return [...prevNotes, response.data];
    });

  };

  return (
    <>
      <Header />
      <div className="bigContainer">
        <div className="fromContainer">
          <form action="/" method="post">
            <div class="container">
              <label for="uname">
                <b>Username</b>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                onChange={handleChange}
                required
              />

              <label for="psw">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                onChange={handleChange}
                required
              />

              <button onClick={submitLogin} type="submit">
                Login
              </button>
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

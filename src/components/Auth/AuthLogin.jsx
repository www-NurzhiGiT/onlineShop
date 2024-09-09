import React, { useState } from "react";
import "./Auth.scss";
import Beatsnoop from "../../assets/image/beadsnoop.png";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

function AuthLogin() {
  const [user, setUser] = useState({ email: "", password: "" });

  TODO: 1;
  function handle(event) {
    const { value, name } = event.target;
    setUser({ ...user, [name]: value });
  }
  TODO: 2;
  async function signIn() {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      );
      toast.success("User signed up successfully!");

      console.log(res);
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("User signed up error!", error.massage);
    }
  }

  return (
    <div className="register">
      <img src={Beatsnoop} alt="image-Beatsnoop" className="register-img1" />
      <div className="register-form">
        <div className="register-text">
          <h3>Log in to Exclusive</h3>
          <p>Enter your details below</p>
        </div>
        <div className="register-info">
          <div className="inputs">
            <input
              onChange={handle}
              value={user.email}
              name="email"
              type="email"
              placeholder="Email or Phone Number"
            />
            <input
              onChange={handle}
              value={user.password}
              name="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="buttons">
            <button className="btnOne" onClick={() => signIn()}>
              Log in
            </button>

            <div className="logIn">
              <Link className="liInk" to="/login">
                Forget password?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthLogin;

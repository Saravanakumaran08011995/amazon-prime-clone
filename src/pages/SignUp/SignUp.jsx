import { Link, useNavigate } from "react-router-dom";
import logo from "./logo.png";
import "./signup.scss";
import { useState } from "react";
import api from "../../api/api";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleFinish = async (e) => {
    e.preventDefault();

    try {
      await api.post("api/auth/register", { email, username, password });
      navigate("/signin");
    } catch (err) {
      console.log("API Call Error:", err);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="signup-content">
          <h1>Create account</h1>
          <form className="signup-form" onSubmit={handleFinish}>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="username"
              placeholder="First and last name"
              value={username}
              onChange={handleUsernameChange}
            />
            <label htmlFor="email">Email or phone number</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="At least 6 characters"
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="submit">Create your Amazon account</button>
          </form>
          <div>
            <p>Already have an account?</p>
            <button type="submit" className="create-account">
              <Link to="/signin" className="link">
                Sign In
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

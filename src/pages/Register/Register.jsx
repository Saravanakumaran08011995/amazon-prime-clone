
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./register.scss";

export const Register = () => {
 
  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={logo} alt="logo" />
        </div>
      </div>
      <div className="container">
        <h1>Welcome to Prime Video</h1>
        <h2>
          Watch the latest movies, TV shows, and award-winning Amazon Originals
        </h2>
        <button><Link to="/signup" className="link">Sign in to join Prime</Link></button>
      </div>
    </div>  
  );
};

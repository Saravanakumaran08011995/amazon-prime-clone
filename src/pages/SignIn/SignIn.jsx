import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./signIn.scss";
import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";

const SignIn = () => {
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")
  const { dispatch } = useContext(AuthContext)

  const handleLogin = (e)=>{
    e.preventDefault()
    login({email,password},dispatch)
  }
  
  return (
    <div className="signin-wrapper">
      <div className="signin-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="signin-content">
          <h1>Sign In</h1>
          <form className="signin-form">
            <label htmlFor="email">Email or phone number</label>
            <input type="email" id="email" onChange={(e)=> setEmail(e.target.value)} /> 
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} />
            <button type="submit" onClick={handleLogin}>Sign In</button>
          </form>
          <div>
            <p>New to Amazon?</p>
            <button type="submit" className="create-account">
              <Link to="/signup" className="link">
                Create Your Amazon Account
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

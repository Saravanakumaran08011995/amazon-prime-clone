import "./navbar.scss";
import logo from "./logo.png";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

export const Navbar = ({ clearGenre }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin");
  };

  const handleHomeClick = () => {
    clearGenre();
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src={logo} alt="Logo" />
          <div className="home">
            <Link to="/" className="link">
              <span>Home</span>
            </Link>

            <div className="options">
              <span>
                <Link to="/" className="link" onClick={handleHomeClick}>
                  All
                </Link>
              </span>
              <span>
                <Link to="/movies" className="link">
                  Movies
                </Link>
              </span>
              <span>
                <Link to="/series" className="link">
                  TV Shows
                </Link>
              </span>
            </div>
          </div>

          <div className="store">
            <span tabIndex="0">Store</span>
            <div className="options">
              <span>All</span>
              <span>Rent</span>
              <span>Channels</span>
            </div>
          </div>

          <div className="stuff">
            <span tabIndex="0">My Stuff</span>
            <div className="options">
              <span>All</span>
              <span>Rent</span>
              <span>Channels</span>
            </div>
          </div>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          <div className="profile">
            <AccountCircleIcon />
            <div className="options">
              <span>Settings</span>
              <span onClick={handleLogout}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

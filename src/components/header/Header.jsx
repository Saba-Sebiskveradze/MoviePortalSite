import React from "react";
import { useAppContext } from "../../context/AppContextProvider";
import { signOutUser } from "../../context/appActionCreators";
import logo from "../../images/logo.png";
import "../header/header.css";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
const Header = () => {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();
  const backtohome = () => {
    navigate(routes.home);
  };
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" onClick={backtohome} />
      <nav>
        <ul className="header-ul">
          <li className="header-li" onClick={backtohome}>
            Home
          </li>
          <li className="header-li">Movies</li>
          <li className="header-li">TV series</li>
        </ul>
      </nav>
      <button
        onClick={() => {
          dispatch(signOutUser());
        }}
        className="signout"
      >
        signout
      </button>
    </header>
  );
};

export default Header;

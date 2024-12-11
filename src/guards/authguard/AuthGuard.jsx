import React from "react";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import { useAppContext } from "../../context/AppContextProvider";
import backgroundImage from "../../images/backgroundImage.jpg";
import "./authguard.css";

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const { state } = useAppContext();
  if (!state.isUserLoggedIn) {
    return (
      <div className="guard-div">
        <img
          src={backgroundImage}
          alt="backgroundImage"
          className="background-image"
        ></img>
        <div className="background-overlay"></div>
        <div className="guard-div2">
          <h1 className="guard-h1">You are not logged in</h1>
          <button
            className="authButton"
            onClick={() => {
              navigate(routes.login);
            }}
          >
            login
          </button>
        </div>
      </div>
    );
  }
  return <>{children}</>;
};

export default AuthGuard;

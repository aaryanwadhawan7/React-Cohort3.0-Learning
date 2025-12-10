import React from "react";
import { useNavigate } from "react-router-dom";

const NoPage = () => {
  const navigate = useNavigate();

  const navHomePage = () => {
    navigate("/home");
  };
  return (
    <>
      <button onClick={navHomePage} className="nav-home">
        Go to Home Page
      </button>
      <div className="no-page">404 | No Page Available</div>
    </>
  );
};

export default NoPage;

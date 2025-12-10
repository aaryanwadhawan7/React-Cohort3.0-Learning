import React from "react";
import Navbar2 from "./Navbar2";
import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

const Navbar = () => {
  const { user } = useContext(UserDataContext);

  return (
    <div className="nav">
      <h2>studyDeck | Welcome {user}</h2>
      <Navbar2></Navbar2>
    </div>
  );
};

export default Navbar;

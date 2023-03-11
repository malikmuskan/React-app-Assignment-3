import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../AuthContext";

const Home = () => {
  const [isLoggedIn] = useContext(AuthContext);
  return (
    <>
      <h1>Home</h1>
      {isLoggedIn ? (
        <p>
          You are logged - <Link to="/dashboard">View Dashboard</Link>
        </p>
      ) : (
        <p>
          <Link to="/login">Log In</Link> or <Link to="/signup">Sign Up</Link> 
        </p>
      )}
    </>
  );
};

export default Home;
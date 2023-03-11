import React, { useEffect, useState } from "react";
import {auth} from "./config.js";
import { onAuthStateChanged } from "firebase/auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import AuthContext from "./AuthContext";
import SignIn from "./components/SignIn";
import CalculatorPage from "./pages/CalculatorPage";
import WeatherPage from "./pages/WeatherPage.jsx";
import NewsFeedPage from "./pages/NewsFeedPage.jsx";
import FoodFeedPage from "./pages/FoodsPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    setLoading(true);
   onAuthStateChanged(auth,(user) => {
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
      setLoading(false);
    }else {
      setCurrentUser({});
        setIsLoggedIn(false);
        setLoading(false);
      
    }
    });
  },[]);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <AuthContext.Provider value={[isLoggedIn,currentUser]}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/weather" element={<WeatherPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/news-feed" element={<NewsFeedPage />} />
          <Route path="/food-feed" element={<FoodFeedPage />} />
          <Route exact path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
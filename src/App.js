import React, { useState, useEffect, useCallback } from "react";
// import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Auth } from "aws-amplify";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Dashboard from "./Pages/Dashboard";
import { AuthContext } from "./shared/context/auth-context";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Redirect to="/dashboard" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Redirect to="/" />
      </Switch>
    );
  }

  useEffect(() => {
    try {
      const fetchData = async () => {
        const session = await Auth.currentSession();
        setIsLoggedIn(true);
        console.log(session);
        const user = await Auth.currentAuthenticatedUser();
        console.log(user);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <div className="App">
          <Header />
          {routes}
          <Footer />
        </div>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;

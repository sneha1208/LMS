import React from "react";
import Navbar from "../components/Navbar";
import { Auth } from "aws-amplify";

const Dashboard = () => {
  const handleClick = async () => {
    try {
      let user = await Auth.currentAuthenticatedUser();
      console.log(user);
    } catch (err) {
      console.log("error:", err);
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Dashboard</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Dashboard;

import React from "react";
import logo from "../images/trachat.png";

const Welcome = () => {
  return (
    <div className="Welcome">
      <img src={logo} className="Logo" alt="Trachat logo" />
      <p>
        You have new, fresh, juicy Trach? Welcome to Trachat and spread trach
        with your Trachat friends
      </p>
    </div>
  );
};

export default Welcome;

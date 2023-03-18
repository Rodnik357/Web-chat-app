import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import ChatBox from "./components/ChatBox";

import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const App = () => {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <div className="App">
      <Navbar />
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  );
};

export default App;

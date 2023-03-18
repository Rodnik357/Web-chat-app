import React, { useState } from "react";
import "../App.css";

import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMessage = ({ scroll }) => {
  const [message, setMessage] = useState("");

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form onSubmit={(event) => sendMessage(event)} className="SendMessage">
      <label htmlFor="MessageInput" hidden>
        Enter your message here ...
      </label>
      <input
        type="text"
        id="MessageInput"
        name="MessageInput"
        placeholder="Enter your trach here ..."
        className="FormInputInput"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="SendMessageButton">
        Send
      </button>
    </form>
  );
};

export default SendMessage;

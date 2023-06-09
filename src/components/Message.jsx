import React from "react";
import "../App.css";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  console.log(message.uid);

  return (
    <div className={`ChatBubble ${message.uid === user.uid ? "right" : ""}`}>
      <img
        className="ChatBubble__Left"
        src={message.avatar}
        alt="user avatar"
      />

      <div className="ChatBubble__Right">
        <p className="UserName">{message.name}</p>
        <p className="UserMessage">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;

import React from "react";
import UserIcon from "../assets/images/user-icon.png";
const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <img src={UserIcon} alt="youtube icon" className="h-7" />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;

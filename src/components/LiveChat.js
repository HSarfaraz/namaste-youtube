import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomString } from "../utils/helper";
const LiveChat = () => {
  const [liveMessage, sendLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API Polling
      // console.log("API Polling");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomString(10),
        })
      );
    }, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-hidden overflow-y-scroll flex flex-col-reverse">
        {chatMessages &&
          chatMessages.map((chatMessage, index) => (
            <ChatMessage
              key={index}
              name={chatMessage.name}
              message={chatMessage.message}
            />
          ))}
      </div>
      <form
        className="w-full ml-2 p-2 border border-black rounded-lg "
        onSubmit={(e) => {
          e.preventDefault(); 
          console.log("form submitted", liveMessage);
          dispatch(addMessage({
            name:"Sarfaraz",
            message: liveMessage
          }))
        }}
      >
        <input
          className="px-2 w-40 border border-gray-300 rounded-lg "
          type="text"
          value={liveMessage}
          onChange={(e) => {
            sendLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100 rounded">Send</button>
      </form>
    </>
  );
};

export default LiveChat;

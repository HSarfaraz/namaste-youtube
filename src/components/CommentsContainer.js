import React from "react";
import UserIcon from "../assets/images/user-icon.png";

const commentsDATA = [
  {
    name: "Rohit Sharma",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam tellus.",
    replies: [],
  },
  {
    name: "Ravindra Jadeja",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam tellus.",
    replies: [
      {
        name: "Rohit Sharma",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam tellus.",
        replies: [],
      },
      {
        name: "Ravindra Jadeja",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam tellus.",
        replies: [],
      },
    ],
  },
  {
    name: "Sarfaraz Khan",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam tellus.",
    replies: [
      {
        name: "Rohit Sharma",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam tellus.",
        replies: [],
      },
      {
        name: "Ravindra Jadeja",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam tellus.",
        replies: [],
      },
    ],
  },
  {
    name: "Bumrah",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam tellus.",
    replies: [
      {
        name: "Rohit Sharma",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam tellus.",
        replies: [],
      },
      {
        name: "Ravindra Jadeja",
        text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam tellus.",
        replies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-lg rounded bg-gray-200 p-2 my-2">
      <img src={UserIcon} className="h-12 w-10 pt-2" />
      <div className="px-3">
        <h1 className="font-bold">{name}</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="p-2 m-2">
      <h1 className="font-bold text-2xl pb-2">comments:</h1>
      <CommentsList comments={commentsDATA} />
    </div>
  );
};

export default CommentsContainer;

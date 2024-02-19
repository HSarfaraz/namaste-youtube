import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "News",
  "Valentines",
  "Cooking",
];
const ButtonList = () => {
  return (
    <div className="flex">
      {list.map((item, index) => (
        <Button key={index} name={item} />
      ))}
      {/* <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Live" />
      <Button name="Soccer" />
      <Button name="Cricket" />
      <Button name="News" />
      <Button name="Valentines" /> */}
    </div>
  );
};

export default ButtonList;

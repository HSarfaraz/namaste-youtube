import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarktheme, setIsDarkTheme] = useState(false);

  //Heavy operations
  const prime = useMemo(() => findNthPrime(text), [text]);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black rounded " +
        (isDarktheme ? "bg-gray-900 text-white" : "")
      }
    >
      <button
        className="m-10 p-2 bg-green-200"
        onClick={() => setIsDarkTheme(!isDarktheme)}
      >
        Toggle Theme
      </button>
      <input
        className="border border-black w-72 px-2"
        type="number"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></input>
      <h1 className="font-bold">{prime}</h1>
    </div>
  );
};

export default Demo;

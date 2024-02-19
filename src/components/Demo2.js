import React, { useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);
  let x = 0;
  const ref = useRef(0);

  console.log("Rendering...");

  return (
    <div className="m-4 p-2 bg-slate-50 border border-black w-96 h-96">
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            x = x + 2;
            console.log("x =", x);
          }}
        >
          Increase X
        </button>
        <span className="font-bold text-xl">Increase x</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            setY(y + 1);
            console.log("y =", y);
          }}
        >
          Increase X
        </button>
        <span className="font-bold text-xl">Increase y</span>
      </div>
      <div>
        <button
          className="bg-green-100 p-2 m-4"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log(ref.current);
          }}
        >
          Increase Ref
        </button>
        <span className="font-bold text-xl">Ref = {ref.current}</span>
      </div>
    </div>
  );
};

export default Demo2;

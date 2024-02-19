import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap">
      {Array(10)
        .fill("")
        .map((e) => (
          <div className="m-2 p-2 w-80 rounded-lg shadow-lg">
            <div className="bg-gray-300 h-36 rounded"></div>
            <h3 className="bg-gray-300 h-5 mt-4"></h3>
            <h4 className="bg-gray-300 h-5 mt-2 w-1/2"></h4>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;

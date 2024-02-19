import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
      {/* <MainContainer />
      <WatchPage /> */}
    </div>
  );
};

export default Body;

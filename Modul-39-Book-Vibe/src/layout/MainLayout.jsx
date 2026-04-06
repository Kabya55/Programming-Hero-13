import React from "react";
import Nave from "../component/nave/Nave";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Nave></Nave>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;

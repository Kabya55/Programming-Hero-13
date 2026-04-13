import React from "react";
import { Outlet } from "react-router";
import Nav from "../component/sherd/nav/Nav";
import Footer from "../component/sherd/footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;

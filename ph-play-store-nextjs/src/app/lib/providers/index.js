import InastallAppsProvider from "@/context/inastall.context";
import React from "react";

const Providers = ({ children }) => {
  return <InastallAppsProvider>{children}</InastallAppsProvider>;
};

export default Providers;

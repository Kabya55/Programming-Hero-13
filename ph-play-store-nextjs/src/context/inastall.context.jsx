"use client";
import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const InastallAppsContext = createContext();
const InastallAppsProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useState([]);

  const data = {
    installedApps,
    setInstalledApps,
  };

  return (
    <InastallAppsContext.Provider value={data}>
      {children}
    </InastallAppsContext.Provider>
  );
};

export default InastallAppsProvider;

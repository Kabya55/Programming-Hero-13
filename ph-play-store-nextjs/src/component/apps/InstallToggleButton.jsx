"use client";

import { useContext } from "react";
import { InastallAppsContext } from "@/context/inastall.context";
import { toast } from "react-toastify";

const InstallToggleButton = ({ app }) => {
  const { installedApps, setInstalledApps } = useContext(InastallAppsContext);

  const isInstalled = installedApps.some((item) => item.id === app.id);

  const handleInastallNow = () => {
    if (isInstalled) return;

    setInstalledApps([...installedApps, app]);
    toast.success(`${app.title} is installed!`);
  };

  return (
    <button
      className={`btn ${isInstalled ? "btn-success" : "btn-primary"}`}
      onClick={handleInastallNow}
    >
      {isInstalled ? "Installed" : "Install"}
    </button>
  );
};

export default InstallToggleButton;

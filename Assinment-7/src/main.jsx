import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layout/RootLayout";
import HomePage from "./pages/homePage/HomePage";
import TimelinePage from "./pages/timelinePage/TimelinePage";
import FriendDetailsPage from "./pages/friendDetailsPage/FriendDetailsPage";
import StatsPage from "./pages/statsPage/StatsPage";
import InteractionProvider from "./context/InteractionContext";
import ErorPage from "./pages/erorPage/ErorPage";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <ErorPage></ErorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/friend/:id",
        element: <FriendDetailsPage></FriendDetailsPage>,
      },
      {
        path: "/timeline",
        element: <TimelinePage></TimelinePage>,
      },
      {
        path: "/stats",
        element: <StatsPage></StatsPage>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <InteractionProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </InteractionProvider>
  </StrictMode>,
);

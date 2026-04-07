import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/homePage/HomePage";
import BookPage from "../pages/bookPage/BookPage";
import ErorPage from "../pages/erorPage/ErorPage";
import BookDetails from "./../pages/bookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/bookPage",
        element: <BookPage></BookPage>,
      },
      {
        path: "/bookDetails/:id",
        Component: BookDetails,
      },
    ],
    errorElement: <ErorPage></ErorPage>,
  },
]);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Categories from "./pages/Categories.tsx";
const router = createBrowserRouter([
  {
    path: "/author-desserts/",
    element: <App />,
    children: [
      {
        path: "/author-desserts/",
        element: <Home />,
      },
      {
        path: "/author-desserts/categories",
        element: <Categories />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

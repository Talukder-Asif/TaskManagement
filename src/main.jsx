import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./Layout/MainLayout";
import Landing from "./Pages/Landing/Landing";
import Login from "./Pages/LoginPage/Login";
import AuthProvider from "./Authantication/AuthProvider/AuthProvider";
import CreateAccount from "./Pages/Registration/CreateAccount";
import DashboardLayout from "./Layout/DashboardLayout";
import Dashboard from "./Pages/UserPages/DashBoard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Landing></Landing>,
      },
      {
        path: "/signin",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element:<CreateAccount></CreateAccount>
      },
      {
        path:"/users",
        element:<DashboardLayout></DashboardLayout>,
        children:[
          {
            path:"/users",
            element:<Dashboard></Dashboard>
          }
        ]
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

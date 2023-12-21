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
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PrivateRoute from "./Routes/PrivateRoute";
import AddTask from "./Pages/UserPages/AddTask/AddTask";
import MyTask from "./Pages/UserPages/MyTask/MyTask";
import UpdateTask from "./Pages/UserPages/UpdateTask/UpdateTask";
const queryClient = new QueryClient();

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
        element: <CreateAccount></CreateAccount>,
      },
      {
        path: "/users",
        element: (
          <PrivateRoute>
            <DashboardLayout></DashboardLayout>
          </PrivateRoute>
        ),
        children: [
          {
            path: "/users/profile",
            element: <Dashboard></Dashboard>,
          },
          {
            path:"/users/addTask",
            element:<AddTask></AddTask>
          },
          {
            path:"/users/Task",
            element:<MyTask></MyTask>
          },
          {
            path:"/users/update/:id",
            element:<UpdateTask></UpdateTask>
          }
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

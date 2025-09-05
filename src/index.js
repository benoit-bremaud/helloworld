import './index.css';

import {RouterProvider, createBrowserRouter} from "react-router-dom";

import App from './App';
import Menu from "./components/Menu";
import {Outlet} from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import User from './pages/User';
import UserList from './pages/UserList';
import World from './pages/World';
import reportWebVitals from './reportWebVitals';

const Layout = () => (
  <>
    <Menu />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
            <App />
        ),
      },
      {
        path: "/world",
        element: (
            <World />
        ),
      },
      {
        path: "/users",
        element: (
            <UserList />
        ),
      },
      {
        path: "/users/:id",
        element: (
            <User />
        ),
      }
    ]
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

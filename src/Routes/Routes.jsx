import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Secret from "../Pages/Secret/Secret";
import PrivateRoutes  from "./PrivateRoutes";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Dashboard from "../Layout/Dashboard";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Register />,
        },
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "/order/:category",
          element: <Order />,
        },
        {
          path: "/secret",
          element: <PrivateRoutes><Secret /></PrivateRoutes> ,
        },
      ],
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        }
      ]
    }
  ]);
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Apps from "../Apps/Apps";
import Installation from "../Installation/Installation";
import AppDetails from "../AppDetails/AppDetails";



export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children: [
        {
            index: true,
            loader: () => fetch("/apps.json"),
            Component: Home 
        },
        {
            path: "apps",
            loader: () => fetch("/apps.json"),
            Component: Apps
        },
        {
            path: "installation",
            loader: () => fetch("/apps.json"),
            Component: Installation
        },
        {
          path: "appDetails/:id",
          loader: () => fetch("/apps.json"),
          Component: AppDetails
        }
      ]
    },
  ]);
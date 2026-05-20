import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Apps from "../Apps/Apps";
import Installation from "../Installation/Installation";



export const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children: [
        {
            index: true,
            Component: Home 
        },
        {
            path: "apps",
            Component: Apps
        },
        {
            path: "installation",
            Component: Installation
        }
      ]
    },
  ]);
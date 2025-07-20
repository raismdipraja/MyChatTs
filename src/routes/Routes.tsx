import React from "react";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { routes } from "./routes.route";

const router = createBrowserRouter(routes, {
  basename: import.meta.env.REACT_APP_PATH || "/",
});
export const Routes: React.FC = () => <RouterProvider router={router} />;
export default Routes;

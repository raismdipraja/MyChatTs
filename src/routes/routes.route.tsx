import { Navigate, RouteObject } from "react-router";
import { LayoutWrapper } from "@/pages/LayoutWrapper/index.tsx";
import Dashboard from "@/pages/dashboard/index.tsx";
import Login from "@/pages/login/index.tsx";
import { SignedLayout } from "../containers/SignedLayout";
import routerPath from "./path";
import { NotFoundContainer } from "@/pages/NotFound/index.tsx";

export const routes: RouteObject[] = [
  {
    path: routerPath.root,
    errorElement: <div>Error 1</div>,
    element: <LayoutWrapper />,
    children: [
      {
        index: true,
        path: "/",
        element: <Navigate to="/mychat/login" replace />,
      },
      {
        path: "/mychat/login",
        element: <Login />,
      },
      // {
      //   path: routerPath.app.base,
      //   errorElement: <div>Error 1.2</div>,
      //   element: <SignedLayout />,
      //   children: [
      //     {
      //       path: routerPath.app.Dashboard,
      //       errorElement: <div>Error 1.1</div>,
      //       element: <Dashboard />,
      //     },
      //     {
      //       path: "*",
      //       element: <div>Not Found 2</div>,
      //     },
      //   ],
      // },
      {
        path: "*",
        element: <NotFoundContainer />,
      },
    ],
  },
];

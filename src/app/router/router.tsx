import { createBrowserRouter } from "react-router";

import MainLayout from "@/components/layouts/main-layout";
import HomePage from "@/features/products/pages/home-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);

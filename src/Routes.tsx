import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Navigate to="/" />,
      },
    ],
    errorElement: <PageNotFound />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

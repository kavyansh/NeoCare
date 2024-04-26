import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import { Navigate } from "react-router-dom";
import Layout from "./pages/Layout";

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

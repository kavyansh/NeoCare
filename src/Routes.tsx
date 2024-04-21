import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./components/PageNotFound";
import { Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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

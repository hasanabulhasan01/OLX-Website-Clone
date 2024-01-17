import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../Views/Dashboard";
import CardDetails from "../Views/CardDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/CardDetails/:id",
    element: <CardDetails />,
  },
]);
function Router() {
  return <RouterProvider router={router} />;
}
export default Router;

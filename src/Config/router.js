import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../Views/Dashboard";
import Login from '../Views/Login';
import CardDetails from "../Views/CardDetails";
import Register from '../Views/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/CardDetails/:id",
    element: <CardDetails />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  }
]);
function Router() {
  return <RouterProvider router={router} />;
}
export default Router;

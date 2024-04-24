import MinimumLayout from "../layout/MinimumLayout";
import Register from "../pages/Register";
import Login from "../pages/Login.jsx";

const guestRoutes = [
  {
    path: "/",
    element: <MinimumLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
];

export default guestRoutes;

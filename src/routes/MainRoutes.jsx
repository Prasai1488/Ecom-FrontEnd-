import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";

const mainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
    ],
  },
];

export default mainRoutes;
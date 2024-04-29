import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import AddProduct from "../pages/AddProduct";
import About from "../pages/About";
import ProductDetail from "../pages/ProductDetail";
import EditProduct from "../pages/EditProduct";
import Cart from "../pages/Cart";


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
      {
        path: "about",
        element: <About />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "product/details/:id",
        element: <ProductDetail />,
      },
      {
        path: "update/product/:id",
        element: <EditProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
];

export default mainRoutes;

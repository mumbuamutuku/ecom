import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  createBrowserRouter, Outlet, RouterProvider, ScrollRestoration
} from "react-router-dom";
import { productsData } from "./api/Api";
import Products from "./components/Products";

const Layout=()=>{
  return(
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ]
  },
]);

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router}/> 
    </div>
  );
}

export default App;

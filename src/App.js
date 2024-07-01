import React from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  createBrowserRouter, Outlet, RouterProvider, ScrollRestoration
} from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { productsData } from "./api/Api";
import Products from "./components/Products";
import Login from "./pages/Login";

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

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//         loader: productsData,
//       },
//       {
//         path: "/products/:id",
//         element: <Products />,
//       },
//       {
//         path: "/cart",
//         element: <Cart />,
//       },
//       {
//         path: "/login",
//         element: <Login />,
//       },
//     ]
//   },
// ]);

// function App() {
//   return (
//     <div className="font-bodyFont">
//       <RouterProvider router={router}/> 
//     </div>
//   );
// }
function App() {
  return (
    <div className="font-bodyFont">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} loader: productsData />
            <Route path="products/:id" element={<Products />} />
            <Route path="cart" element={<Cart />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

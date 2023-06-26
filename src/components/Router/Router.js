import { Route, Routes, RouterProvider, Navigate, Link, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Admin from "../Admin";
import Client from "../Client";
import Home from "../Home";
import Products from "../Products/Products";
import Vendor from "../Vendor/Vendor";
import Layout from "./Layout";
import NotFound from "../Notfound";
import LoginScreen from "../User/Login";
import Productscreen from "../Products/Productscreen";
import Cart_screen from "../Cart/Cart_screen";
import Purchase_screen from "../Cart/Purchase_screen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/Home" element={<Home />} />
      <Route path="/" element={<Navigate replace to="/Home" />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/vendor" element={<Vendor />} />
      <Route path="/client" element={<Client />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Productscreen />} />
      <Route path="/Login" element={<LoginScreen />} />
      <Route path="/Cart" element={<Cart_screen />} />
      <Route path="/Purchase" element={<Purchase_screen />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const Router = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Router;

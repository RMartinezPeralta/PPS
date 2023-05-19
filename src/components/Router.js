import { Route, Routes, RouterProvider, Navigate, Link, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Admin from "./Admin";
import Client from "./Client";
import Home from "./Home";
import Products from "./Products";
import Vendor from "./Vendor";
import Layout from "./Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/Home" element={<Home />} />
      <Route path="/" element={<Navigate replace to="/Home" />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/vendor" element={<Vendor />} />
      <Route path="/client" element={<Client />} />
      <Route path="/products" element={<Products />} />
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

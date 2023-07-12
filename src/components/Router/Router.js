import { Route, RouterProvider, Navigate, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../User/Authcontext";

import Admin from "../Admin/Admin";
import Client from "../Client";
import Home from "../Home";
import Products from "../Products/Products";
import Vendor from "../Vendor/Vendor";
import Layout from "./Layout";
import NotFound from "../Notfound";
import Register from "../User/Register";
import LoginScreen from "../User/Login";
import Productscreen from "../Products/Productscreen";
import CartScreen from "../Cart/Cart_screen";
import PurchaseScreen from "../Cart/Purchase_screen";
import Userpage from "../User/Userpage";

const Router = () => {
  const { currentUser } = useContext(AuthContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Navigate replace to="/Home" />} />
        {/* Solo permite acceso a ciertas rutas si el usuario actual tiene el rol adecuado*/}
        <Route path="/account" element={currentUser.role !== 0 ? <Userpage /> : <Navigate to="/notfound" />} />
        <Route path="/admin" element={currentUser.role === 1 ? <Admin /> : <Navigate to="/notfound" />} />
        <Route path="/vendor" element={currentUser.role === 2 ? <Vendor /> : <Navigate to="/notfound" />} />
        <Route path="/client" element={currentUser.role === 3 ? <Client /> : <Navigate to="/notfound" />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Productscreen />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<LoginScreen />} />
        <Route path="/Cart" element={<CartScreen />} />
        <Route path="/Purchase" element={<PurchaseScreen />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default Router;

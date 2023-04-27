import React from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ product }) => {
  const navigate = useNavigate();
  const homeHandler = () => {
    navigate("/");
  };

  return (
    <>
      <button onClick={homeHandler}>Volver a home</button>
      <h1>Products</h1>
      <p>PRODUCTO 1</p>
      <p>PRODUCTO 2</p>
      <p>PRODUCTO 3</p>
      <p>PRODUCTO 4</p>
      <p>PRODUCTO 5</p>
    </>
  );
};

export default Products;

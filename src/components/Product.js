import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Product = ({ productData }) => {
  return (
    <div className="product_card">
      <div> {productData.img}</div>
      <p> Categoria: {productData.category}</p>
      <h2>{productData.name}</h2>
      <h3> Precio: {productData.price}</h3>
      <p>Descripcion: {productData.description}</p>
    </div>
  );
};

export default Product;

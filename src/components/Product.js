import React from "react";

const Product = ({ product }) => {
  return (
    <>
      <div>asd</div>
      <div>href {product.foto}</div>
      <h3>{product.price} Precio</h3>
      <p>{product.name}Nombre o Titulo de Producto</p>
      <p>{product.description}Descripción breve Producto</p>
    </>
  );
};

export default Product;

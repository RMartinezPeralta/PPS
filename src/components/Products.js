import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "./Product";

import Filter from "./Filter";

const productList = {
  product1: {
    id: "132",
    data: {
      name: "clavos x200",
      category: "Clavos",
      img: "Imagen",
      price: 200,
      description: "Una caja con 200 clavos",
    },
  },
  product2: {
    id: "133",
    data: {
      name: "destornillador plano",
      category: "Destornilladores",
      img: "Imagen",
      price: 500,
      description: "Un destornillador de cabeza plana ",
    },
  },
  product3: {
    id: "134",
    data: {
      name: "clavos grandes x50",
      category: "Clavos",
      img: "Imagen",
      price: 400,
      description: "Una caja con 50 clavos grandes",
    },
  },
};

const Products = () => {
  const [filterCategory, setFilterCategory] = useState("All");
  const filterChangedHandler = (category) => {
    setFilterCategory(category);
  };

  const navigate = useNavigate();

  const productsMapped = Object.values(productList)
    .filter((product) => (filterCategory === "All" ? product : product.data.category === filterCategory))
    .map((product) => <Product key={product.id} productData={product.data} />);

  return (
    <>
      <h1>Articulos</h1>
      <Filter filterCategory={filterCategory} categoryChanged={filterChangedHandler} label="Filtrar por categoria" all={true} />
      <div className="Product_list">{productsMapped}</div>
    </>
  );
};

export default Products;

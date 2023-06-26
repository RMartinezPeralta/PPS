import React, { useEffect, useState } from "react";
import Product from "./Product";
import Filter from "./Filter";
import { Getproducts } from "../Service/Api";
import LoadingScreen from "../Loadingscreen";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [articlesList, setArticlesList] = useState([]);
  const articleListHandler = (List) => {
    setArticlesList(List);
  };

  const fetchData = async () => {
    setLoading(true);
    const List = await Getproducts();
    console.log(List);
    articleListHandler(List);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [filterCategory, setFilterCategory] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const filterChangedHandler = (category) => {
    setFilterCategory(category);
    setCurrentPage(1);
  };

  // Filter and paginate the products
  const filteredProducts = Object.values(articlesList).filter((product) => filterCategory === 0 || product.categoryId === filterCategory);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = Math.ceil(filteredProducts.length / productsPerPage);

    return (
      <div className="pagination">
        {Array.from({ length: pageNumbers }, (_, i) => (
          <p key={i + 1} className={`pagination-number ${i + 1 === currentPage ? "active" : ""}`} onClick={() => paginate(i + 1)}>
            {i + 1}
          </p>
        ))}
      </div>
    );
  };

  // Render Products filtered
  const productsMapped = currentProducts.map((product) => <Product key={product.id} productData={product} />); //Render Filtered products

  return (
    <>
      <div className="Products">
        <h1>Articulos </h1>
        <Filter filterCategory={filterCategory} categoryChanged={filterChangedHandler} label="Filtrar por categoria" all={true} />
        {loading === true ? <LoadingScreen /> : <div className="Product_list"> {productsMapped}</div>}
        {renderPageNumbers()}
      </div>
    </>
  );
};

export default Products;

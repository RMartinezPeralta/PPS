import React, { useEffect, useState } from "react";
import Product from "./Product";
import Filter from "./Filter";
import { Getproducts } from "../Service/FakeApi";
import LoadingScreen from "../Loadingscreen";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [articlesList, setArticlesList] = useState([]);
  const articleListHandler = (List) => {
    setArticlesList(List);
  };

  const url = "https://localhost:7167/api/Product?state=1";

  const fetchData = async () => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setArticlesList(data);
      });
  };

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const fetchfakeData = async () => {
    setLoading(true);
    await delay(1000);

    articleListHandler(Getproducts());

    setLoading(false);
  };

  useEffect(() => {
    fetchfakeData();
  }, []);

  const [filterCategory, setFilterCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const filterChangedHandler = (category) => {
    setFilterCategory(category);
    setCurrentPage(1);
  };

  // Filter and paginate the products
  const filteredProducts = Object.values(articlesList).filter((product) => filterCategory === "All" || product.category === filterCategory);

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
  const productsMapped = currentProducts.map((product, index) => <Product key={product.id + index} productData={product} />); //Fakeapi render

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

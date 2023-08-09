import React, { useEffect, useState } from "react";
import Product from "./Product";
import Filter from "./Filter";
import { Getproducts } from "../Service/Api";
import LoadingScreen from "../Loadingscreen";
import BrandFilter from "./BrandFilter";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [articlesList, setArticlesList] = useState([]);
  const articleListHandler = (List) => {
    setArticlesList(List);
  };

  // Llama a APi y trae lista de productos
  const fetchData = async () => {
    setLoading(true);
    const List = await Getproducts();
    articleListHandler(List);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  // States que almacenan la categoria actual, la marca actual y el numero de pagina actual
  const [filterCategory, setFilterCategory] = useState(0);
  const [filterBrand, setFilterBrand] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  // Numero de productos a mostrar por pagina
  const productsPerPage = 10;

  const categoryChangedHandler = (category) => {
    setFilterCategory(category);
    setCurrentPage(1);
  };

  const brandChangedHandler = (brand) => {
    setFilterBrand(brand);
    setCurrentPage(1);
  };

  // Filtra el producto por pagina, luego por marca
  const filteredProducts = Object.values(articlesList)
    .filter((product) => filterCategory === 0 || product.categoryId === filterCategory)
    .filter((product) => filterBrand === 0 || product.brandId === filterBrand);
  // Divide los productos restantes en base al numero de productos por pagina y se los asigna a un numero de pagina
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = Math.ceil(filteredProducts.length / productsPerPage);

    // Renderiza los botones para cada pagina
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

  // Renderiza los productos luego de ser filtrados
  const productsMapped = currentProducts.map((product) => <Product key={product.id} productData={product} />);

  return (
    <div className="Products">
      <h1>Articulos </h1>
      <div className="Filter_container">
        <Filter filterCategory={filterCategory} categoryChanged={categoryChangedHandler} label="Filtrar por categoria" all={true} />
        <BrandFilter filterCategory={filterBrand} categoryChanged={brandChangedHandler} label="Marca" all={true} />
      </div>
      {loading === true ? <LoadingScreen /> : <div className="Product_list"> {productsMapped}</div>}
      {renderPageNumbers()}
    </div>
  );
};

export default Products;

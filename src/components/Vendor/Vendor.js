import { useState } from "react";
import Filter from "../Products/Filter";
import BrandFilter from "../Products/BrandFilter";
import { postProduct } from "../Service/Api";
const Vendor = () => {
  const [inputName, setInputName] = useState("");
  const changeInputNameHandler = (event) => {
    setInputName(event.target.value);
  };

  const [inputText, setInputText] = useState("");
  const changeInputTextHandler = (event) => {
    setInputText(event.target.value);
  };

  const [inputPrice, setInputPrice] = useState(0);
  const changeInputPriceHandler = (event) => {
    const priceValue = parseFloat(event.target.value);

    if (priceValue > 0) {
      setInputPrice(priceValue);
    } else {
      setInputPrice(1);
    }
  };

  const [inputCategory, setInputCategory] = useState(4);
  const changeInputCategoryHandler = (event) => {
    setInputCategory(event);
  };

  const [inputBrand, setInputBrand] = useState(1);
  const changeInputBrandHandler = (event) => {
    setInputBrand(event);
  };

  const [inputImage, setInputImage] = useState("");
  const changeInputImageHandler = (event) => {
    setInputImage(event.target.value);
  };

  const [inputStock, setinputStock] = useState(10);
  const changeinputStockHandler = (event) => {
    const stockValue = parseInt(event.target.value, 10);

    if (stockValue >= 1) {
      setinputStock(stockValue);
    } else {
      setinputStock(1);
    }
  };

  const validateArticle = (articleData) => {
    let errorsValidation = {};

    if (articleData.name === "") {
      errorsValidation = { ...errorsValidation, name: "Campo obligatorio." };
    } else if (articleData.name.length < 3) {
      errorsValidation = { ...errorsValidation, name: "El nombre del producto debe tener al menos 3 letras" };
    } else {
      delete errorsValidation.name;
    }
    if (articleData.pricePurchase <= 0) {
      errorsValidation = { ...errorsValidation, pricePurchase: "El precio debe ser mayor a 0" };
    } else {
      delete errorsValidation.pricePurchase;
    }

    return errorsValidation;
  };

  const submitHandler = () => {
    const articleData = {
      categoryId: inputCategory,
      brandId: inputBrand,
      name: inputName,
      description: inputText,
      stock: inputStock,
      priceSales: 0,
      pricePurchase: inputPrice,
      img: inputImage,
    };
    const errorsValidation = validateArticle(articleData);

    if (Object.keys(errorsValidation).length === 0) {
      postProduct(articleData);
    } else {
      alert("Error al ingresar datos");
    }
    setInputName("");
    setInputText("");
    setInputCategory(4);
    setInputImage("");
    setInputPrice(0);
  };

  return (
    <div className="ArticleForm">
      <h3>Agregar Producto</h3>
      <div className="Inputs">
        <div>
          <label>Nombre </label>
          <input value={inputName} onChange={changeInputNameHandler} type="text" />
        </div>
        <div>
          <label>Precio $</label>
          <input value={inputPrice} onChange={changeInputPriceHandler} type="number" />
        </div>
        <div>
          <label>Descripcion </label>
          <input value={inputText} onChange={changeInputTextHandler} type="text" />
        </div>
        <div>
          <Filter filterCategory={inputCategory} categoryChanged={changeInputCategoryHandler} label="Categoria" all={false} />
        </div>
        <div>
          <BrandFilter filterCategory={inputBrand} categoryChanged={changeInputBrandHandler} label="Marca" all={false} />
        </div>
        <div>
          <label>Imagen </label>
          <input type={"url"} value={inputImage} onChange={changeInputImageHandler}></input>
        </div>
        <div>
          <label>Stock</label>
          <input value={inputStock} onChange={changeinputStockHandler} type="number" />
        </div>
      </div>
      <button className="Submit_Button" onClick={submitHandler}>
        Aceptar
      </button>
    </div>
  );
};

export default Vendor;

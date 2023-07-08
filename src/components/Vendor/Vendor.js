import { useState } from "react";
import Filter from "../Products/Filter";
import BrandFilter from "../Products/BrandFilter";
import { postProduct } from "../Service/Api";
const Vendor = () => {
  // States en los que se almacenan los inputs del usuario
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
      setInputPrice("");
    }
  };

  const [inputCategory, setInputCategory] = useState(1);
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
    // Validacion de los datos puestos por el usuario, cada error es añadido a errorsValidation
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
    // Compilacion de datos en un solo const
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
    // Validacion de datos, si errorsValidation vuelve vacio no hay errores
    if (Object.keys(errorsValidation).length === 0) {
      postProduct(articleData);
      setInputName("");
      setInputText("");
      setInputCategory(1);
      setInputBrand(1);
      setInputImage("");
      setInputPrice(0);
    } else {
      const errorMessages = Object.entries(errorsValidation)
        .map(([field, errorMessage]) => `${field}: ${errorMessage}`)
        .join("\n");

      alert(errorMessages);
    }
  };

  return (
    <div className="Form_container">
      <h2>Agregar Producto</h2>

      <div className="form-group">
        <label>Nombre </label>
        <input value={inputName} onChange={changeInputNameHandler} type="text" />
      </div>
      <div className="form-group">
        <label>Precio $</label>
        <input value={inputPrice} onChange={changeInputPriceHandler} type="number" />
      </div>
      <div className="form-group">
        <label>Descripcion </label>
        <textarea value={inputText} onChange={changeInputTextHandler} rows={5} />
      </div>
      <div className="form-group">
        <Filter filterCategory={inputCategory} categoryChanged={changeInputCategoryHandler} label="Categoria" all={false} />
      </div>
      <div className="form-group">
        <BrandFilter filterCategory={inputBrand} categoryChanged={changeInputBrandHandler} label="Marca" all={false} />
      </div>
      <div className="form-group">
        <label>Imagen </label>
        <input type={"url"} value={inputImage} onChange={changeInputImageHandler}></input>
      </div>
      <div className="form-group">
        <label>Stock</label>
        <input value={inputStock} onChange={changeinputStockHandler} type="number" />
      </div>

      <button className="Green_button" onClick={submitHandler}>
        Aceptar
      </button>
    </div>
  );
};

export default Vendor;

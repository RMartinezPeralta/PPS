import React, { useContext, useEffect, useState } from "react";
import { getProductById } from "../Service/FakeApi";
import { useParams } from "react-router-dom";
import { Cartcontext } from "../Cart/Cart_context";

const Productscreen = () => {
  const id = useParams().id;
  const { addToCart, cartItems } = useContext(Cartcontext);
  const cartItemCount = cartItems[id];
  const [article, setArticle] = useState("");

  const getProduct = () => {
    //Fakeapi
    setArticle(getProductById(id));
  };

  useEffect(() => {
    //Traer un objeto
    getProduct();
  }, []);
  return (
    <div className="product_page">
      <h2>{article.name}</h2>
      <h3>{article.category}</h3>
      <img className="Product_page_image" src={article.img} alt="Imagen no encontrada"></img>
      <p>{article.description}</p>
      <p> Precio: ${article.price}</p>
      <button className="Buy_button" onClick={() => addToCart(article.id)}>
        Agregar al carro {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>

    // Idea, añadir productos relacionados, renderizar una lista pequeña de productos de la misma categoria (Y capaz marca)
  );
};

export default Productscreen;

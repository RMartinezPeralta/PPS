import React, { useContext, useEffect, useState } from "react";
import { getProductById } from "../Service/Api";
import { useParams } from "react-router-dom";
import { Cartcontext } from "../Cart/Cart_context";
import LoadingScreen from "../Loadingscreen";

const Productscreen = () => {
  const [loading, setLoading] = useState(true);
  const id = useParams().id;
  const { addToCart, cartItems } = useContext(Cartcontext);
  const cartItemCount = cartItems[id];
  const [article, setArticle] = useState("");

  // Trae un producto en base a su id
  const getProduct = async () => {
    setLoading(true);
    setArticle(await getProductById(id));
    setLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="product_page">
      {loading === true ? (
        <LoadingScreen />
      ) : (
        <div>
          <h2>{article.name}</h2>
          <img className="Product_page_image" src={article.img} alt="Imagen no encontrada"></img>
          <p>{article.description}</p>
          <p> Precio: ${article.pricePurchase}</p>
          <button className="Green_button" onClick={() => addToCart(article.id)}>
            Agregar al carro {cartItemCount > 0 && <> ({cartItemCount})</>}
          </button>
        </div>
      )}
    </div>

    // Idea, añadir productos relacionados, renderizar una lista pequeña de productos de la misma categoria (Y capaz marca)
  );
};

export default Productscreen;

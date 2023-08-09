import { useState, useEffect } from "react";
import { getProductById } from "../Service/Api";

const OrderItem = ({ Item }) => {
  const [article, setArticle] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const product = await getProductById(Item.productId);
        setArticle(product);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [Item.productId]);

  return (
    <div className="Order_Item">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h4>ID del producto: {Item.productId}</h4>
          <h4>Nombre: {article.name}</h4>
          <div className="Order_divider">
            <div>
              <p>Precio: ${article.pricePurchase} </p>
              <p>Cantidad: {Item.quantity}</p>
            </div>
            <div>
              <img className="Order_Img" src={article.img} alt="Imagen no encontrada"></img>
            </div>
          </div>
        </div>
        // You can display other product information here
      )}
    </div>
  );
};

export default OrderItem;

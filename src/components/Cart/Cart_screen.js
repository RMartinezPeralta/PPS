import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cartcontext } from "./Cart_context";
import { Getproducts } from "../Service/Api";
import Cart_item from "./Cart_item";
import LoadingScreen from "../Loadingscreen";

const Cart_screen = () => {
  const [loading, setLoading] = useState(true);
  const [articlesList, setArticlesList] = useState([]);
  const articleListHandler = (List) => {
    setArticlesList(List);
  };
  const { cartItems, checkout, getTotalCartAmount } = useContext(Cartcontext);
  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();
  //const productsMapped = currentProducts.map((product, index) => <Product key={product.id + index} productData={product} />); //Fakeapi render

  const Cart_map = Object.keys(articlesList).map((key) => {
    const product = articlesList[key];
    if (cartItems.hasOwnProperty(product.id) && cartItems[product.id] !== 0) {
      return <Cart_item key={product.id} productData={product} />;
    }
    return null;
  });
  const fetchfakeData = async () => {
    setLoading(true);
    articleListHandler(await Getproducts());
    setLoading(false);
  };

  useEffect(() => {
    fetchfakeData();
  }, []);
  //{loading === true ? <LoadingScreen /> : <div className="Product_list"> {productsMapped}</div>}
  return (
    <div>
      <h2>Carrito de compras</h2>
      <div>
        {loading === true ? (
          <LoadingScreen />
        ) : (
          <div className="Cart_screen">
            <div className="Cart_items">{Cart_map} </div>
            {Object.keys(cartItems).length === 0 ? (
              <h2>Vacio</h2>
            ) : (
              <div>
                <p> Subtotal: ${totalAmount} </p>
                <button
                  className="Button"
                  onClick={() => {
                    checkout();
                    navigate("/Purchase");
                  }}>
                  Comprar
                </button>
                <button
                  className="Button"
                  onClick={() => {
                    checkout();
                  }}>
                  Cancelar Compra
                </button>{" "}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart_screen;

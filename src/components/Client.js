import { useNavigate } from "react-router-dom";

const Client = () => {
  const navigate = useNavigate();
  const homeHandler = () => {
    navigate("/");
  };

  return (
    <>
      <button onClick={homeHandler}>Volver a home</button>

      <p>CLIENT PROFILE ABM Usuario</p>
      <p>. . .</p>
      <p>ID_CLIENTE string</p>
      <p>ID_PASS string</p>
      <p>RAZON SOCIAL string</p>
      <p>TELEFONO int</p>
      <p>DIRECCION Object/ARRAY (calle, nro, piso, depto, localidad)</p>
      <p>EMAIL mail</p>
      <p>. . .</p>
      <h3> - ↓ - ↓ - INTERFAZ DEBAJO - ↓ - ↓ - </h3>

      <form>
        <h4>¿Qué desea hacer?</h4>
        <button type="button" onClick={() => navigate("/products")}>
          ver listado de Productos
        </button>
        <button type="button" onClick={() => navigate("/register")}>
          Registar PEDIDO
        </button>
        <button type="button" onClick={() => navigate("/purchase")}>
          Comprar
        </button>
      </form>
    </>
  );
};
export default Client;

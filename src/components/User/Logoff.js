import { useContext } from "react";
import { AuthContext } from "./Authcontext";
import { useNavigate } from "react-router-dom";

const Logoff = () => {
  const { logOff } = useContext(AuthContext);
  const Navigate = useNavigate();

  const handleClick = async () => {
    logOff();
    Navigate("/Home");
  };

  // Boton que llama a context para que cierra la sesion actual
  return (
    <div>
      <button className="button" onClick={handleClick}>
        Cerrar sesion
      </button>
    </div>
  );
};

export default Logoff;

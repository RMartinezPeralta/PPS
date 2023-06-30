import { useContext } from "react";
import { AuthContext } from "./Authcontext";

const Userpage = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="UserPage">
      <h2>Pagina de usuario</h2>
      <h3>
        Nombre: {currentUser.name} {currentUser.lastName}
      </h3>
      <h4>{currentUser.role}</h4>
      <h4>{currentUser.email}</h4>
    </div>
  );
};

export default Userpage;

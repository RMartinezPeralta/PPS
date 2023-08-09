import { useContext } from "react";
import { deleteUserById } from "../Service/Api";
import { AuthContext } from "../User/Authcontext";

const getRoleName = (roleId) => {
  switch (roleId) {
    case 1:
      return "Administrador";
    case 2:
      return "Vendedor";
    case 3:
      return "Cliente";
    default:
      return "Cuenta sin rol";
  }
};

const UserObject = ({ userData }) => {
  const { currentToken } = useContext(AuthContext);
  const handleDelete = async () => {
    const confirmDelete = window.confirm("¿Estás seguro que quieres borrar esta cuenta?");
    if (confirmDelete) {
      const response = await deleteUserById(userData.id, currentToken);
      console.log("Delete response: ", response);
    }
  };

  return (
    <div className="UserObject">
      <h3>ID: {userData.userId}</h3>
      <h3>Email: {userData.email}</h3>
      <h3>Tipo de cuenta: {getRoleName(userData.roleId)}</h3>
      <button className="Red_button" onClick={handleDelete}>
        Borrar
      </button>
    </div>
  );
};

export default UserObject;

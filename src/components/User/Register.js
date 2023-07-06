import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Authcontext";


const Register = () => {
    const navigate = useNavigate();
    const { attemptRegister } = useContext(AuthContext);
    
    
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    
    // Envia los datos al Context para que intente Registrarse
  const handleSubmit = async () => {
    const response = await attemptRegister(name, lastName, email, password);
    console.log("Response: ", response);
    if (response === true) {
      navigate(`/Home`);
    } else {
      alert("Todos los campos son obligatorios por favor!");
    }
  };
  
    
    
  
    return (
      <div className="container-fluid">
        <div className="wrapper">
          <form className="register-form" onSubmit={handleSubmit}>
            <h2 className="title">Registrar</h2>
            <div className="register-input">
            <div className="register-input">
              <label>Nombre</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="input"
                placeholder="Name"
              />
            </div>
              <label>Apellido</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="input"
                placeholder="Apellido"
              />
            </div>
            <div className="register-input">
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input"
                placeholder="Email"
              />
            </div>
            
            <div className="register-input">
              <label>Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
                placeholder="Contraseña"
              />
            </div>
            <button type="submit" className="add btn btn-block">
              Registrarme
            </button>
          </form>
          
          {<p className="error">Todos los campos son obligatorios.</p>}
        </div>
      </div>
    );
  };
  
  export default Register;
  
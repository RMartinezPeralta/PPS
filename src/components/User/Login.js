import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Authcontext";

const LoginScreen = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const { attemptLogin } = useContext(AuthContext);

  // Envia los datos al Context para que intente logear
  const handleClick = async () => {
    const body = JSON.stringify({
      email: Email,
      password: password,
    });
    const response = await attemptLogin(body);
    console.log("Response: ", response);
    if (response === true) {
      Navigate(`/Home`);

      localStorage.setItem("LoginData", body);
    } else {
      alert("Email o contraseña incorrectos");
    }
  };

  return (
    <div className="Form_container">
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="Email">Email:</label>
        <input id="Email" type="text" value={Email} onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña:</label>
        <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>
      <button className="Green_button" onClick={handleClick}>
        Ingresar
      </button>
    </div>
  );
};

export default LoginScreen;

import { useContext, useState } from "react";
import { login } from "./Authapi";
import { useNavigate } from "react-router-dom";
import { AuthDispatchContext } from "./Authcontextdispatch";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  const setCurrentUser = useContext(AuthDispatchContext);

  return (
    <div className="login">
      <div className="Input">
        <label for="username">Username: </label>
        <input id="username" type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        <label for="password">Contraseña: </label>
        <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </div>

      <button
        className="Button"
        onClick={() => {
          login(username, password)
            .then((user) => {
              setCurrentUser(user);
              console.log("login correcto", user);
              Navigate("/");
            })
            .catch((err) => {
              alert(err);
            });
        }}>
        Ingresar
      </button>
    </div>
  );
};

export default LoginScreen;

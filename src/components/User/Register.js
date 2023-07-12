import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./Authcontext";

const Register = () => {
  const navigate = useNavigate();
  const { attemptRegister } = useContext(AuthContext);

  const [userName, setUserName] = useState("");
  const changeUserNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const [name, setName] = useState("");
  const changeNameHandler = (event) => {
    setName(event.target.value);
  };
  const [lastName, setLastName] = useState("");
  const changeLastNameHandler = (event) => {
    setLastName(event.target.value);
  };
  const [email, setEmail] = useState("");
  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const [password, setPassword] = useState("");
  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const isEmailValid = (email) => {
    // Estructura basica de un Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Se testea el Email del usuario para ver si tiene una estructura de Email valida
    const test = emailRegex.test(email);
    return test;
  };

  // Envia los datos al Context para que intente Registrarse
  const validateData = (registerData) => {
    // Validacion de los datos puestos por el usuario, cada error es añadido a errorsValidation
    let errorsValidation = {};
    if (registerData.userName === "") {
      errorsValidation = { ...errorsValidation, Usuario: "Campo obligatorio." };
    } else if (registerData.userName.length < 3) {
      errorsValidation = { ...errorsValidation, Usuario: "El nombre de usuario debe tener al menos 3 letras" };
    } else {
      delete errorsValidation.Usuario;
    }
    if (registerData.firstName === "") {
      errorsValidation = { ...errorsValidation, Nombre: "Campo obligatorio." };
    } else if (registerData.firstName.length < 3) {
      errorsValidation = { ...errorsValidation, Nombre: "El nombre debe tener al menos 3 letras" };
    } else {
      delete errorsValidation.Nombre;
    }
    if (registerData.lastName === "") {
      errorsValidation = { ...errorsValidation, Apellido: "Campo obligatorio." };
    } else if (registerData.lastName.length < 3) {
      errorsValidation = { ...errorsValidation, Apellido: "El apellido debe tener al menos 3 letras" };
    } else {
      delete errorsValidation.Apellido;
    }
    if (registerData.email === "") {
      errorsValidation = { ...errorsValidation, Email: "Campo obligatorio." };
    } else if (!isEmailValid(registerData.email)) {
      errorsValidation = { ...errorsValidation, Email: "Debes insertar un Email valido" };
    } else {
      delete errorsValidation.Email;
    }
    if (registerData.password === "") {
      errorsValidation = { ...errorsValidation, Contraseña: "Campo obligatorio." };
    } else if (registerData.password.length < 8) {
      errorsValidation = { ...errorsValidation, Contraseña: "La contraseña debe tener al menos 8 caracteres." };
    } else if (!/[\W_]/.test(registerData.password)) {
      errorsValidation = {
        ...errorsValidation,
        Contraseña: "La contraseña debe contener al menos un carácter no alfanumérico.",
      };
    } else {
      delete errorsValidation.Contraseña;
    }

    return errorsValidation;
  };

  const handleSubmit = async () => {
    const registerData = {
      roleId: 3,
      userName: userName,
      firstName: name,
      lastName: lastName,
      email: email,
      password: password,
    };
    console.log(registerData);
    const errorsValidation = validateData(registerData);
    if (Object.keys(errorsValidation).length === 0) {
      // Sin errores, se envia a api
      const response = await attemptRegister(registerData);
      console.log("Register response: ", response);
      if (response === true) {
        alert("Usuario registrado, por favor inicie sesion");
        setEmail("");
        setLastName("");
        setName("");
        setUserName("");
        setPassword("");
        navigate(`/login`);
      } else {
        // Ocurre cuando hay un error de conexion de parte de la api
        alert("Hubo un error, intentelo mas tarde");
      }
    } else {
      // Errores en la validacion
      const errorMessages = Object.entries(errorsValidation)
        .map(([field, errorMessage]) => `${field}: ${errorMessage}`)
        .join("\n");

      alert(errorMessages);
    }
  };

  return (
    <div className="Form_container">
      <h2>Registrar usuario</h2>
      <div className="form-group">
        <label htmlFor="userName">Nombre de usuario</label>
        <input id="userName" value={userName} onChange={changeUserNameHandler} type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input id="name" value={name} onChange={changeNameHandler} type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="lastName">Apellido</label>
        <input id="lastName" value={lastName} onChange={changeLastNameHandler} type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input id="email" value={email} onChange={changeEmailHandler} type="email" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input id="password" value={password} onChange={changePasswordHandler} type="password" />
      </div>
      <button className="Green_button" onClick={handleSubmit}>
        Aceptar
      </button>
    </div>
  );
};

export default Register;

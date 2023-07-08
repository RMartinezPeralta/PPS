import React, { createContext, useState } from "react";
import { Register, Login, getUserById } from "../Service/Api";

export const AuthContext = createContext({});

// Modo invitado
const guestMode = () => {
  const guestUser = {
    role: 0,
    id: null,
    name: null,
    lastName: null,
    email: null,
  };
  return guestUser;
};

export const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(guestMode);

  const attemptRegister = async (registerData) => {
    const response = await Register(registerData);
    if (response === false) {
      console.log("Error al registrar");
      return false;
    } else {
      console.log("Exito al registrar");
      return true;
    }
  };

  //Llama metodo Login en Api, si funciona setea nuevo usuario
  const attemptLogin = async (Email, Password) => {
    const response = await Login(Email, Password);
    if (response === false) {
      console.log("Error de login");
      return false;
    } else {
      console.log("Login exitoso");
      setAccount(response);
      return true;
    }
  };

  // Setea usuario
  const setAccount = async (data) => {
    const userData = {
      role: data.roleId,
      id: data.id,
      name: data.name,
      lastName: data.lastName,
      email: data.email,
    };
    setCurrentUser(userData);
    // Guarda un token en localstorage
    localStorage.setItem("authToken", userData.id);
  };

  const rememberRegister = async (storedId) => {
    const response = await getUserById(storedId);
    setAccount(response);
  };
  //Llama api con Id en localstorage, devuelve usuario, el cual es seteado. Esto es inseguro, habria que hashear el ID y crear un metodo nuevo
  const rememberLogin = async (storedId) => {
    const response = await getUserById(storedId);
    setAccount(response);
  };
  // Vuelve el usuario a "Guest" y borra el token en local storage
  const logOff = () => {
    setCurrentUser(guestMode);
    localStorage.removeItem("authToken");
  };

  const contextValue = {
    currentUser,
    rememberRegister,
    rememberLogin,
    setCurrentUser,
    attemptRegister,
    attemptLogin,
    logOff,
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

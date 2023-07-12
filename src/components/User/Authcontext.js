import React, { createContext, useState } from "react";
import { Register, Login, getUserById } from "../Service/Api";

export const AuthContext = createContext({});

// Modo invitado
const guestMode = () => {
  const guestUser = {
    role: 0,
    id: null,
    userName: null,
  };
  return guestUser;
};

export const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(guestMode);
  const [currentToken, setCurrentToken] = useState(null);

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
      return false;
    } else {
      setAccount(response.user);
      setCurrentToken(response.token);
      return true;
    }
  };

  // Setea usuario
  const setAccount = async (data) => {
    const userData = {
      role: data.roleId,
      id: data.id,
      userName: data.userName,
      name: data.firstName,
      lastName: data.lastName,
      email: data.email,
    };
    setCurrentUser(userData);
    // Guarda un token en localstorage
    localStorage.setItem("authToken", data.id);
  };

  //Llama api con Id en localstorage, devuelve usuario, el cual es seteado.
  const rememberLogin = async (storedId) => {
    const response = await getUserById(storedId);
    setAccount(response);
  };
  // Vuelve el usuario a "Guest" y borra el token en local storage
  const logOff = () => {
    console.log("Log off");
    setCurrentUser(guestMode);
    setCurrentToken(null);
    localStorage.removeItem("authToken");
  };

  const contextValue = {
    currentUser,
    currentToken,
    rememberLogin,
    setCurrentUser,
    attemptRegister,
    attemptLogin,
    logOff,
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

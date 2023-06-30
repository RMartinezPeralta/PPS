import React, { createContext, useState } from "react";
import { Login, getUserById } from "../Service/Api";

export const AuthContext = createContext({});

// Modo invitado
const guestMode = () => {
  const guestUser = { role: 0, id: null, name: null, lastName: null, email: null };
  return guestUser;
};

export const AuthContextProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(guestMode);

  //Llama metodo Login en Api, si funciona setea nuevo usuario
  const attemptLogin = async (Email, Password) => {
    const response = await Login(Email, Password);
    if (response === false) {
      console.log("Login error");
      return false;
    } else {
      console.log("Success");
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
    localStorage.setItem("authToken", userData.id); // Convert userData to a formatted JSON string
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
    rememberLogin,
    setCurrentUser,
    attemptLogin,
    logOff,
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

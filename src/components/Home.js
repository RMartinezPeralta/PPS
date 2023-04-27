import React, { useState } from "react";
import "./styles.css";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const adminClick = () => {
    navigate("/admin");
  };
  const vendorClick = () => {
    navigate("/vendor");
  };
  const clientClick = () => {
    navigate("/client");
  };

  const [user, setUser] = useState("");
  const userHandler = (event) => {
    setUser(event.target.value);
  };

  const [pass, setPass] = useState("");
  const passHandler = (event) => {
    setPass(event.target.value);
  };

  const submitHandler = () => {
    setUser("mira que te como");
    // validate user

    switch (user) {
      case "": //do something
    }
  };

  return (
    <>
      <div className="asd">
        <h1>Home</h1>
        <p>Login / Context? / Router OK</p>

        <h3>↓ LOGIN ↓</h3>

        <form className="buttons">
          <input type="text" placeholder="Usuario" onChange={userHandler} />
          <input
            type="password"
            placeholder="Password"
            onChange={passHandler}
          />
          <button type="submit" onClick={submitHandler}>
            Ingresar
          </button>

          <p>No está registrado?</p>
          <button>Registrar gratis!</button>
        </form>

        <h3>↓ Router ↓</h3>

        <div className="buttons">
          <button onClick={adminClick}>Admin</button>
          <button onClick={vendorClick}>Vendedor</button>
          <button onClick={clientClick}>Cliente</button>
        </div>
      </div>
    </>
  );
};

export default Home;
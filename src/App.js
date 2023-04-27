import "./App.css";
import Admin from "./components/Admin";
import Client from "./components/Client";
import Home from "./components/Home";
import Products from "./components/Products";
import Vendor from "./components/Vendor";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="App">
        <header className="App-header"> App Ferreteria </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="admin" element={<Admin />} />
          <Route path="vendor" element={<Vendor />} />
          <Route path="client" element={<Client />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </div>
    </>
  );
};

export default App;

import "./App.css";
import { useEffect, useState } from "react";

import Router from "./components/Router";

import { AuthContext } from "./components/User/Authcontext";
import { AuthDispatchContext } from "./components/User/Authcontextdispatch";
import { CartContextProvider } from "./components/Cart/Cart_context";

const App = () => {
  return (
    <>
      <div className="App">
        <AuthProvider>
          <CartContextProvider>
            {" "}
            <Router />
          </CartContextProvider>
        </AuthProvider>
      </div>
    </>
  );
};

export default App;

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({ name: null, role: "Guest" });
  return (
    <AuthContext.Provider value={currentUser}>
      <AuthDispatchContext.Provider value={setCurrentUser}>{children}</AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
};

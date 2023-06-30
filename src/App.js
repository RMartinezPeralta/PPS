import "./App.css";

import Router from "./components/Router/Router";

import { CartContextProvider } from "./components/Cart/Cart_context";
import { AuthContextProvider } from "./components/User/Authcontext";

const App = () => {
  return (
    <div className="App">
      <AuthContextProvider>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </AuthContextProvider>
    </div>
  );
};

export default App;

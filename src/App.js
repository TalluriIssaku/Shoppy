import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
import Appbar from "./components/Appbar";
import CartState from "./context/Cart/CartState";
import Cart from "./Pages/Cart";
function App() {
  return (
    <CartState >
      <Router>
        <Appbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart/> } />
        </Routes>
      </Router>
    </CartState>
  );
}

export default App;

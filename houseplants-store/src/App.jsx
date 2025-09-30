import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProductListing from "./pages/ProductListing";
import CartPage from "./pages/CartPage";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;

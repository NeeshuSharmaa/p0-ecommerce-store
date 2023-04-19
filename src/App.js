import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductListing from "./Pages/ProductListing";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
import NotFound from "./Pages/NotFound";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

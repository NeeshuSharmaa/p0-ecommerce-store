import { useState, useEffect, useContext, createContext } from "react";
import { fakeFetch } from "../api/fakeFetch";

const ECommerceContext = createContext();

export function useEContext() {
  return useContext(ECommerceContext);
}
export function ContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [msg, setMsg] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  const getProducts = async (url) => {
    try {
      const {
        status,
        data: { products },
      } = await fakeFetch(url);
      if (status === 200) {
        setProducts(products);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getProducts("https://example.com/api/products");
  }, []);

  function addToCartHandler(idToAdd) {
    const itemToBeAdded = products.find(({ id }) => id === idToAdd);
    console.log("item added to cart", itemToBeAdded);
    setCart((cart) => [...cart, itemToBeAdded]);
    setMsg("cart");
    setTimeout(() => setMsg(""), 2000);
  }
  function removeFromCartHandler(idToRemove) {
    const itemsLeft = products.filter(({ id }) => id === idToRemove);
    setCart(itemsLeft);
    setMsg("cart-remove");
    setTimeout(() => setMsg(""), 2000);
  }
  function addToWishlistHandler(idToAdd) {
    const itemToBeAdded = products.find(({ id }) => id === idToAdd);
    console.log("item added to wishlist", itemToBeAdded);
    setWishlist((wishlist) => [...wishlist, itemToBeAdded]);
    setMsg("wishlist");
    setTimeout(() => setMsg(""), 2000);
  }
  function removeFromWishlistHandler(idToRemove) {
    const itemsLeft = products.filter(({ id }) => id === idToRemove);
    setCart(itemsLeft);
    setMsg("wish-remove");
    setTimeout(() => setMsg(""), 2000);
  }
  const value = {
    products,
    cart,
    wishlist,
    msg,
    addToCartHandler,
    addToWishlistHandler,
    removeFromCartHandler,
    removeFromWishlistHandler,
  };
  return (
    <ECommerceContext.Provider value={value}>
      {children}
    </ECommerceContext.Provider>
  );
}

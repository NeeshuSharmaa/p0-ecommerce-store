import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useEContext } from "../contexts/ECommContext";

export default function ProductDetails() {
  const { products, addToCartHandler, addToWishlistHandler, msg } =
    useEContext();
  const { productId } = useParams();

  const getProductDetails = () => {
    return products.find(({ id }) => id === Number(productId));
  }; // url is a string so pramas also give a string

  const product = getProductDetails();

  return (
    <div>
      <h2>About Product</h2>
      <ProductCard {...product} />
      <div style={{ display: "flex" }}>
        <button
          className="btn cart-btn"
          onClick={() => addToCartHandler(product.id)}
        >
          Add to Cart
        </button>
        <button
          className="btn wish-btn"
          onClick={() => addToWishlistHandler(product.id)}
        >
          Add to Wishlist
        </button>
      </div>
      {msg && msg === "cart" && (
        <div className="cart-msg">Item added to Cart</div>
      )}

      {msg && msg === "wishlist" && (
        <div className="wish-msg">Item added to Wishlist</div>
      )}
    </div>
  );
}

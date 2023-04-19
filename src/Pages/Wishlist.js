import { useEffect } from "react";
import { useEContext } from "../contexts/ECommContext";
import ProductCard from "../components/ProductCard";

export default function Wishlist() {
  const { wishlist, removeFromWishlistHandler } = useEContext();
  useEffect(() => console.log(wishlist), []);

  return (
    <div>
      <h2>WISHLIST</h2>
      <h2 style={{ color: "#8efe9e" }}>No. of Items: {wishlist.length}</h2>
      {wishlist.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <h4>Nothing in wishlist! why are you even here?</h4>
          <h3>(¬_¬ )</h3>
        </div>
      ) : (
        <div>
          {wishlist.map((product) => (
            <div className="prod-container">
              <ProductCard {...product} />
              <button
                className="btn"
                onClick={() => removeFromWishlistHandler(product.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

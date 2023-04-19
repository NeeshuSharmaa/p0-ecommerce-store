import { useEffect } from "react";
import { useEContext } from "../contexts/ECommContext";
import ProductCard from "../components/ProductCard";

export default function Cart() {
  const { cart, removeFromCartHandler, addToWishlistHandler, msg } =
    useEContext();
  const allIds = cart.map(({ id }) => id);
  const calcQuantity = allIds.reduce(
    (acc, curr) =>
      acc[curr] ? { ...acc, [curr]: acc[curr] + 1 } : { ...acc, [curr]: 1 },
    {}
  );

  const cartWithQuantity = useEffect(() => console.log(cart), []);
  return (
    <div>
      <h2>CART</h2>
      <h2 style={{ color: "#38bdf8" }}>No. of Items: {cart.length}</h2>
      {cart.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "4rem" }}>
          <h4>Ahh, man! First add something to cart, then visit the cart </h4>
          <h3>╮（╯＿╰）╭</h3>
        </div>
      ) : (
        <div>
          {cart?.map((product) => (
            <div key={product.id} className="prod-container">
              {msg && msg === "wishlist" && (
                <div className="wish-msg">Item added to Wishlist</div>
              )}
              <ProductCard {...product} />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                  <button
                    className="btn"
                    onClick={() => removeFromCartHandler(product.id)}
                  >
                    Remove
                  </button>
                  <button
                    className="btn wish-btn"
                    onClick={() => addToWishlistHandler(product.id)}
                  >
                    Add to Wishlist
                  </button>
                </div>
                <div style={{ alignSelf: "center" }}>
                  Quantity: {calcQuantity[product.id]}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

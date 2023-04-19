import { Link, NavLink } from "react-router-dom";
import { useEContext } from "..";

export default function ProductListing() {
  const { products, addToCartHandler, addToWishlistHandler, msg } =
    useEContext();
  const activeStyleHandler = ({ isActive }) => ({
    color: isActive ? "white" : "black",
    backgroundColor: isActive ? "#082f49" : "",
  });
  return (
    <div>
      <h2>Product listing page</h2>
      <nav>
        <NavLink className="navlink-btn" style={activeStyleHandler} to="/cart">
          Cart
        </NavLink>
        <NavLink
          className="navlink-btn wishlist"
          style={activeStyleHandler}
          to="/wishlist"
        >
          Wishlist
        </NavLink>
      </nav>

      {products.map(({ id, name, description, price }) => (
        <div key={id}>
          <h4>{name}</h4>
          <p>{description}</p>
          <p>
            <b>Price:</b> {price}
          </p>
          <div style={{ display: "flex" }}>
            <Link className="btn" to={`/product/${id}`}>
              Visit Item
            </Link>
            <button
              className="btn cart-btn"
              onClick={() => addToCartHandler(id)}
            >
              Add to Cart
            </button>
            <button
              className="btn wish-btn"
              onClick={() => addToWishlistHandler(id)}
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

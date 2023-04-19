import React from "react";

export default function ProductCard({
  name,
  description,
  quantity,
  price,
  category,
  brand,
}) {
  return (
    <div>
      <p>
        <b>Name: </b>
        {name}
      </p>
      <p>
        <b>Description: </b>
        {description}
      </p>
      <p>
        <b>Price: </b>
        {price}
      </p>
      <p>
        <b>Quantity: </b>
        {quantity}
      </p>
      <p>
        <b>Category: </b>
        {category}
      </p>
      <p>
        <b>Brand: </b>
        {brand}
      </p>
    </div>
  );
}

import Link from "next/link";
import React from "react";

const Card = ({ product }) => {
  return (
    <>
      <div className="card bg-base-100 card-md shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>{product.brand}</p>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <div className="justify-end card-actions">
            <Link href={`/product/${product.id}`}>
              <button className="btn btn-primary">Product Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

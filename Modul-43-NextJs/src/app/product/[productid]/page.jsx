import React from "react";

const ProductDetailsPage = async ({ params }) => {
  const { productid } = await params;

  const res = await fetch(`http://localhost:5000/products/${productid}`);
  const product = await res.json();
  return (
    <>
      <div className="text-center mt-10">
        <h1>Product Details: {product.name}</h1>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
      </div>
    </>
  );
};

export default ProductDetailsPage;

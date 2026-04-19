import Card from "@/component/ui/Card";
import React from "react";

const getProductDetails = async () => {
  const res = await fetch("http://localhost:5000/products");
  return res.json();
};

const ProductsPage = async () => {
  const products = await getProductDetails();
  return (
    <div className="w-11/12 mx-auto">
      <h1>Product : {products.length}</h1>

      <div className="grid lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

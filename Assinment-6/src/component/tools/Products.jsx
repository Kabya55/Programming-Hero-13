import React from "react";
import ProductCart from "./ProductCart";

const Products = ({ datas, slectedItms, setSlectedItms }) => {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-5">
        {datas.map((data) => {
          return (
            <ProductCart
              data={data}
              key={data.id}
              slectedItms={slectedItms}
              setSlectedItms={setSlectedItms}
            ></ProductCart>
          );
        })}
      </div>
    </>
  );
};

export default Products;

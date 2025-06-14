import React from "react";
import ProductCard from "../product_card";
import { products } from "../../../views/landing_page/sample";

export default function ProductList() {
  return (
    <div className="px-8">
      <p className="font-gendra text-2xl my-8 text-primary">Recommended for you</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-1">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            category={product.category}
            price={product.price}
            isNegotiable={product.isNegotiable}
            location={product.location}
            priceOnChat={product.priceOnChat}
          />
        ))}
      </div>
    </div>
  );
}

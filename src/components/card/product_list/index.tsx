import React from "react";
import ProductCard from "../product_card";
import { Product } from "@/views/landing_page/sample";

interface ProductListProps {
  isRecommended: boolean;
  products: Product[];
}

export default function ProductList({
  isRecommended,
  products,
}: ProductListProps) {
  return (
    <div className="px-8 pt-8">
      <p className="font-gendra text-2xl mb-8 text-primary">
        {isRecommended ? "Recommended for you" : "Promoted Items"}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
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
            isRecommended={isRecommended}
          />
        ))}
      </div>
    </div>
  );
}

import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function ProductGrid() {
  const handleAddToCart = (id: string) => {
    console.log(`Added product ${id} to cart`);
  };

  const handleViewDetails = (id: string) => {
    console.log(`Viewing details for product ${id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          {...product}
          onAddToCart={() => handleAddToCart(product.id)}
          onViewDetails={() => handleViewDetails(product.id)}
        />
      ))}
    </div>
  );
}
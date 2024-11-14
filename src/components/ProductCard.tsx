import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';

interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  rating: number;
  reviews: number;
  onAddToCart: () => void;
  onViewDetails: () => void;
}

export default function ProductCard({ 
  name, 
  price, 
  image, 
  category, 
  description,
  rating,
  reviews,
  onAddToCart, 
  onViewDetails 
}: ProductProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <div className="relative group">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-3 right-3">
          <button className="p-2 rounded-full bg-white/80 hover:bg-white transition-colors">
            <Heart className="w-5 h-5 text-rose-500" />
          </button>
        </div>
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button 
            onClick={onViewDetails}
            className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium transform -translate-y-2 group-hover:translate-y-0 transition-transform"
          >
            View Details
          </button>
        </div>
      </div>
      <div className="p-4">
        <span className="text-sm text-emerald-600 font-medium">{category}</span>
        <h3 className="font-semibold text-lg mt-1">{name}</h3>
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">{description}</p>
        
        <div className="mt-2 flex items-center gap-1">
          <Star className="w-4 h-4 fill-current text-yellow-400" />
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-sm text-gray-500">({reviews} reviews)</span>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${price.toFixed(2)}</span>
          <button
            onClick={onAddToCart}
            className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
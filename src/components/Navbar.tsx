import React from 'react';
import { ShoppingCart, Menu, Dog } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Dog className="w-8 h-8 text-emerald-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">PawMart</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Dogs</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Cats</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Birds</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Fish</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Sale</a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="relative p-2">
              <ShoppingCart className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>
            <button className="md:hidden">
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Dogs</a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Cats</a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Birds</a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Fish</a>
          <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">Sale</a>
        </div>
      </div>
    </nav>
  );
}
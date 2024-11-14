import React from 'react';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Featured Products</h1>
            <p className="mt-2 text-gray-600">Find the perfect items for your beloved pets</p>
          </div>
          
          <div className="flex gap-4">
            <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700">
              <option>All Categories</option>
              <option>Dog Supplies</option>
              <option>Cat Supplies</option>
              <option>Bird Supplies</option>
              <option>Fish Supplies</option>
            </select>
            
            <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>

        <ProductGrid />
      </main>

      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About PawMart</h3>
              <p className="text-gray-400">Your one-stop shop for all pet needs. We provide quality products for your beloved companions.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
                <li><a href="#" className="hover:text-white">Returns</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">Subscribe to get special offers and pet care tips.</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white"
                />
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2024 PawMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
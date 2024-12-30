// src/components/NavBar.jsx
import React from 'react'
import { CartWidget } from './CartWidget'

export const NavBar = () => {
  const categories = ['Frutas y Verduras', 'Despensa', 'Snacks', 'Bebidas', 'Endulzantes']
  
  return (
    <nav className="bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Peewah Marketplace</h1>
        
        <div className="hidden md:flex space-x-6">
          {categories.map((category) => (
            <a
              key={category}
              href={`#${category.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {category}
            </a>
          ))}
        </div>

        <CartWidget />
      </div>
    </nav>
  )
}
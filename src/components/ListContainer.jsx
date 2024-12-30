// src/components/ItemListContainer.jsx
import React from 'react'

export const ItemListContainer = ({ greeting }) => {
  const products = [
    {
      id: 1,
      name: "Canasta de Vegetales Orgánicos",
      price: 45.99,
      description: "Selección semanal de vegetales orgánicos de temporada"
    },
    {
      id: 2,
      name: "Miel Orgánica",
      price: 15.99,
      description: "Miel pura de abeja, cosecha local"
    },
    {
      id: 3,
      name: "Mix de Semillas Orgánicas",
      price: 8.99,
      description: "Mezcla de chía, lino y girasol orgánicos"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-white text-center">{greeting}</h2>
      <p className="text-gray-300 text-center mt-2 mb-8">
        Productos orgánicos y sostenibles para una vida saludable
      </p>

      <div className="flex flex-wrap gap-6 justify-center">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-800 rounded-lg p-6 w-full sm:w-[300px]">
            <h3 className="text-xl font-semibold text-white">{product.name}</h3>
            <p className="text-gray-400 mt-2">{product.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-white text-xl">${product.price}</span>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Agregar al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
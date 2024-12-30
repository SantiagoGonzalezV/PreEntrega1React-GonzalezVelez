// src/components/CartWidget.jsx
import React from 'react'
import { ShoppingCart as ShoppingCartIcon } from 'lucide-react'

export const CartWidget = () => {
  return (
    <div className="relative">
      <ShoppingCartIcon className="text-white h-6 w-6" />
      <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
        5
      </span>
    </div>
  )
}
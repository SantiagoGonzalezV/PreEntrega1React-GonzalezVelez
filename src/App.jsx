import { ShoppingCart } from 'lucide-react'

function NavBar() {
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

        <div className="relative">
          <ShoppingCartIcon className="text-white h-6 w-6" />
          <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
            5
          </span>
        </div>
      </div>
    </nav>
  )
}

function ItemListContainer() {
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
      <h2 className="text-3xl font-bold text-white text-center">¡Bienvenidos a Peewah Marketplace!</h2>
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

function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <NavBar />
      <ItemListContainer />
    </div>
  )
}

export default App

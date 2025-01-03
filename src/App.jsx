import React from "react";
import NavBar from "./components/NavBar";
import ListContainer from "./components/ListContainer";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Contenedor principal con el saludo */}
      <header className="p-4 bg-green-500 text-white text-center">
        <h1 className="text-3xl font-bold">¡Bienvenido a Peewah Marketplace!</h1>
        <p className="text-lg">Tu lugar para productos orgánicos y saludables</p>
      </header>

      {/* Barra de navegación */}
      <NavBar />

      {/* Contenido principal */}
      <main className="p-4">
        <ListContainer greeting="Explora nuestras categorías de productos orgánicos:" />
      </main>
    </div>
  );
};

export default App;
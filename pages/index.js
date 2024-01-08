import React from "react";
import Layout from "../layout/Layout";
import useQuiosco from "../hooks/useQuiosco";
import Producto from "../components/Producto";

// Componente para la página principal (Home) que muestra productos de una categoría
export default function Home() {
  // Extraer la categoría actual del contexto mediante el hook personalizado useQuiosco
  const { categoriaActual } = useQuiosco();

  return (
    // Componente Layout que proporciona la estructura general de la página
    <Layout pagina={`Menu ${categoriaActual?.nombre}`}>
      {/* Título de la categoría actual */}
      <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
      {/* Descripción de la página */}
      <p className="text-2xl my-10">
        Elige y Personaliza tu pedido a continuación:
      </p>
      {/* Grid de productos de la categoría actual */}
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grip-cols-3 2xl:grid-cols-4">
        {categoriaActual?.productos?.map((producto) => (
          // Componente Producto para cada producto en la categoría actual
          <Producto key={producto.id} producto={producto}></Producto>
        ))}
      </div>
    </Layout>
  );
}

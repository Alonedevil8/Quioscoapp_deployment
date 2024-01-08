import React from "react";
import Layout from "../layout/Layout";
import useQuiosco from "../hooks/useQuiosco";
import ResumenProducto from "../components/ResumenProducto";

// Componente para la página de Resumen que muestra un resumen del pedido actual
function Resumen() {
  // Extraer el estado del pedido del contexto mediante el hook personalizado useQuiosco
  const { pedido } = useQuiosco();

  return (
    // Componente Layout que proporciona la estructura general de la página
    <Layout pagina="Resumen">
      {/* Título de la página de Resumen */}
      <h1 className="text-4xl font-black">Resumen</h1>
      {/* Descripción de la página */}
      <p className="text-2xl my-10">Revisa Tu Pedido:</p>

      {/* Condición para verificar si hay elementos en el pedido */}
      {pedido.length === 0 ? (
        // Mensaje si no hay elementos en el pedido
        <p className="text-center text-2xl">No Hay Elementos en tu Pedido.</p>
      ) : (
        // Lista de productos en el pedido con el componente ResumenProducto
        <div>
          {pedido.map(producto => (
            <ResumenProducto key={producto.id} producto={producto} />
          ))}
        </div>
      )}
    </Layout>
  );
}

// Exporta el componente Resumen
export default Resumen;

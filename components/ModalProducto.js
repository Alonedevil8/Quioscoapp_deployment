import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";
import { formatearDinero } from "../helpers/index";
import { useState, useEffect } from "react";

// Componente funcional para mostrar un modal de producto
function ModalProducto() {
  // Extraer funciones y estado relevantes del contexto mediante el hook personalizado useQuiosco
  const { producto, handleChangeModal, handleAgregarPedido, pedido } = useQuiosco();

  // Estado para manejar la cantidad de productos y si el modal está en modo edición
  const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

  // Efecto para detectar si el producto ya está en el pedido al abrir el modal y establecer la cantidad
  useEffect(() => {
    if (pedido.some((pedidoState) => pedidoState.id === producto.id)) {
      const productoEdicion = pedido.find(
        (pedidoState) => pedidoState.id === producto.id
      );
      setEdicion(true);
      setCantidad(productoEdicion.cantidad);
    }
  }, [producto, pedido]);

  return (
    // Contenedor del modal dividido en dos secciones
    <div className="md:flex gap-10">
      {/* Sección izquierda con la imagen del producto */}
      <div className="md:w-1/3">
        <Image
          width="400"
          height="500"
          src={`/assets/img/${producto.imagen}.jpg`}
          alt={`imagen: ${producto.nombre}`}
        />
      </div>
      {/* Sección derecha con información y acciones del producto */}
      <div className="md:w-2/3">
        {/* Botón para cerrar el modal */}
        <div className="flex justify-end">
          <button onClick={handleChangeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Título del producto */}
        <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>

        {/* Precio del producto */}
        <p className="mt-5 font-black text-5xl text-amber-500">
          {formatearDinero(producto.precio)}
        </p>

        {/* Sección para ajustar la cantidad de productos */}
        <div className="flex gap-4 mt-5">
          {/* Botón para reducir la cantidad */}
          <button
            type="button"
            onClick={() => setCantidad(cantidad > 1 ? cantidad - 1 : 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>

          {/* Cantidad actual de productos */}
          <p className="text-3xl">{cantidad}</p>

          {/* Botón para aumentar la cantidad */}
          <button
            type="button"
            onClick={() => setCantidad(cantidad < 5 ? cantidad + 1 : 5)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>

        {/* Botón para agregar al pedido o guardar cambios */}
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 
          text-white font-bold uppercase rounded"
          onClick={() => handleAgregarPedido({ ...producto, cantidad })}
        >
          {edicion ? "guardar cambios" : "Añadir al pedido"}
        </button>
      </div>
    </div>
  );
}

// Exporta el componente ModalProducto
export default ModalProducto;

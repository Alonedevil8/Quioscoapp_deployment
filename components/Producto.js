import Image from "next/image";
import { formatearDinero } from "../helpers/index";
import useQuiosco from "@/hooks/useQuiosco";

// Componente funcional para representar un producto en la interfaz del usuario
function Producto({ producto }) {
  // Extraer funciones del contexto mediante el hook personalizado useQuiosco
  const { handleSetProducto, handleChangeModal } = useQuiosco();

  // Extraer propiedades del producto proporcionado
  const { nombre, precio, imagen } = producto;

  return (
    // Contenedor del producto con imagen, nombre, precio y botón de agregar
    <div className="border p-3">
      {/* Imagen del producto */}
      <Image
        width="400"
        height="500"
        src={`/assets/img/${imagen}.jpg`}
        alt={`Imagen producto ${nombre}.jpg`}
      />
      <div className="p-5">
        {/* Nombre del producto */}
        <h3 className="text-2xl font-bold">{nombre}</h3>
        {/* Precio del producto */}
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatearDinero(precio)}
        </p>
        {/* Botón de agregar al pedido */}
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
          onClick={() => {
            // Cambiar el estado del modal y establecer el producto seleccionado
            handleChangeModal();
            handleSetProducto(producto);
          }}
        >
          {" "}
          Agregar
        </button>
      </div>
    </div>
  );
}

// Exporta el componente Producto
export default Producto;

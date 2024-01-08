import Image from "next/image";
import useQuiosco from "@/hooks/useQuiosco";

// Componente funcional para representar una categoría de productos
const Categoria = ({ categoria }) => {
  // Extraer funciones y estado relevantes del contexto mediante el hook personalizado useQuiosco
  const { categoriaActual, handleClickCategoria } = useQuiosco();

  // Extraer propiedades de la categoría proporcionada
  const { nombre, icono, id } = categoria;

  return (
    // Div que representa una categoría. Cambia el fondo si es la categoría actual
    <div
      className={`${
        categoriaActual?.id === id ? "bg-amber-400" : ""
      } flex item-center gap-3 w-full border p-5 hover:bg-amber-400`}
    >
      {/* Imagen de la categoría */}
      <Image
        width="100"
        height="100"
        src={`/assets/img/icono_${icono}.svg`}
        alt="imagen icono"
      />
      {/* Botón que muestra el nombre de la categoría y maneja el clic para cambiar la categoría actual */}
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickCategoria(id)}
      >
        {nombre}
      </button>
    </div>
  );
};

// Exporta el componente Categoría
export default Categoria;

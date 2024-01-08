import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";
import Categoria from "../components/Categoria";

// Componente funcional para representar la barra lateral con categorías
const Sidebar = () => {
  // Extraer categorías del contexto mediante el hook personalizado useQuiosco
  const { categorias } = useQuiosco();

  return (
    <>
      {/* Logo de la aplicación */}
      <Image width={300} height={100} className="p-3" src="/assets/img/logo.svg" alt="logo" />

      {/* Barra de navegación con categorías */}
      <nav className="mt-10">
        {categorias.map((categoria) => (
          // Componente Categoria para cada categoría en la lista
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  );
};

// Exporta el componente Sidebar
export default Sidebar;

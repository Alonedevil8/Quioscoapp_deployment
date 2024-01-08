import { useRouter } from "next/router";
import useQuiosco from "@/hooks/useQuiosco";

// Definición de los pasos del proceso de pedido
const pasos = [
  { paso: 1, nombre: "Menu", url: "/" },
  { paso: 2, nombre: "Resumen", url: "/resumen" },
  { paso: 3, nombre: "Datos y Total", url: "/total" },
];

// Componente funcional para representar la barra de progreso de pasos
const Pasos = () => {
  // Extraer función relevante del contexto mediante el hook personalizado useQuiosco
  const { handleChangePaso } = useQuiosco();

  // Instancia del router de Next.js
  const router = useRouter();

  // Función para calcular el porcentaje de progreso basado en la ruta actual
  const calcularProgreso = () => {
    let porcentaje;

    // Asignar porcentaje según la ruta actual
    if (router.pathname === "/") {
      porcentaje = 11;
    } else if (router.pathname === "/resumen") {
      porcentaje = 52;
    } else if (router.pathname === "/total") {
      porcentaje = 100;
    } else {
      porcentaje = 0;
    }

    return porcentaje;
  };

  return (
    <>
      {/* Sección de botones de pasos */}
      <div className="flex justify-between mb-2">
        {pasos.map((paso) => (
          <button
            onClick={() => {
              // Navegar a la URL correspondiente al paso seleccionado
              router.push(paso.url);
            }}
            className="text-2xl font-bold"
            key={paso.paso}
          >
            {paso.nombre}
          </button>
        ))}
      </div>
      {/* Barra de progreso visual */}
      <div className="bg-gray-100 mb-7">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-1 text-center text-black"
          style={{ width: `${calcularProgreso()}%` }}
        >
          -
        </div>
      </div>
    </>
  );
};

// Exporta el componente Pasos
export default Pasos;

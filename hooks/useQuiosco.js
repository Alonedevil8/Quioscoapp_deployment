import { useContext } from "react";
import QuioscoContext from "../context/QuioscoProvider";

// Hook personalizado para acceder al contexto de Quiosco
const useQuiosco = () => {
  // Utiliza useContext para acceder al contexto de Quiosco
  return useContext(QuioscoContext);
};

// Exporta el hook useQuiosco
export default useQuiosco;

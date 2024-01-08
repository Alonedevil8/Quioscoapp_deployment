// Función para formatear una cantidad numérica como moneda en dólares estadounidenses
const formatearDinero = (cantidad) => {
  // Asegurarse de que cantidad sea una cadena de texto
  const cantidadString = typeof cantidad === 'string' ? cantidad : String(cantidad);

  // Eliminar formato de moneda y convertir a un número
  const numericValue = Number(cantidadString.replace(/[^0-9.-]+/g, ''));

  // Formatear nuevamente como moneda si es necesario
  const formattedValue = numericValue.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formattedValue;
};

// Exporta la función formatearDinero
export { formatearDinero };

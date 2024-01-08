import Layout from "../layout/Layout";
import { useEffect, useCallback } from "react";
import useQuiosco from "../hooks/useQuiosco";
import { formatearDinero } from "../helpers";

// Componente para la página de Total que muestra el total y permite confirmar el pedido
function Total() {
  const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco();

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === "" || nombre.length < 3;
  }, [pedido, nombre]);

  useEffect(() => {
    comprobarPedido();
  }, [pedido, comprobarPedido]);

  return (
    // Componente Layout que proporciona la estructura general de la página
    <Layout pagina="Total y Confirmar Pedido">
      {/* Título de la página de Total */}
      <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
      {/* Descripción de la página */}
      <p className="text-2xl my-10">Confirma tu Pedido: </p>

      <form onSubmit={colocarOrden}>
        <div>
          <label
            htmlFor="nombre"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre:
          </label>
          <input
            id="nombre"
            type="text"
            className="bg-gray-300 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          ></input>
        </div>

        <div className="mt-5">
          <p className="text-2xl">
            {" "}
            Total a Pagar: {""}{" "}
            <span className="font-bold ">{formatearDinero(total)}</span>
          </p>
        </div>

        <div className="mt-5">
          <input
            type="submit"
            className={`${
              comprobarPedido()
                ? "bg-indigo-300"
                : "bg-indigo-600 hover:bg-indigo-800"
            } w-full lg:w-auto px-5 py-2 rounded uppercase font-bold
              text-white text-center`}
            value="Confirmar Pedido"
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </Layout>
  );
}

// Exporta el componente Total
export default Total;

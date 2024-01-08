import React from "react";
import Image from "next/image";
import { formatearDinero } from "../helpers/index";
import axios from "axios";

import { toast } from "react-toastify";

export default function Orden({ orden }) {


  const { id, nombre, fecha, total, pedido } = orden;

  const completarOrden = async (ordenId) => {
    try {
      const data = await axios.post(`/api/ordenes/${ordenId}`);
      toast.success("Pedido Completado");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border p-2 space-y-3">
      <h3 className="text-2xl font-bold">Pedido: {id}</h3>
      <p className="text-lg font-bold">Cliente: {nombre}</p>

      <div>
        {pedido.map((platillo) => {
          return (
            <div
              key={platillo.id}
              className="py-3 flex border-b last-of-type:border-0 items-center"
            >
              <div className="w-32">
                <Image
                  width="150"
                  height="250"
                  src={`/assets/img/${platillo.imagen}.jpg`}
                  alt={`Imagen producto ${platillo.nombre}.jpg`}
                />
              </div>
              <div className="p-5 space-y-2">
                <p className="text-xl font-bold text-amber-500">
                  {platillo.nombre}
                </p>
                <p className="text-sm font-bold">
                  Cantidad: {platillo.cantidad}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="md:flex md:items-center md:justify-between my-10">
        <p className="mt-5 font-black text-3xl text-amber-500">
          Total a Pagar: {formatearDinero(total)}
        </p>
        <button
          className="bg-indigo-600 text-white mt-5 md:mt-0 py-3 px-10 rounded-lg uppercase font-bold
              text-center text-sm"
          type="button"
          onClick={() => completarOrden(id)}
        >
          Completar Orden
        </button>
      </div>
    </div>
  );
}

import AdminLayout from "../layout/AdminLayout";
import useSWR from "swr";
import axios from "axios";
import Orden from "../components/Orden";

export default function Admin() {
  const fetcher = () => axios("/api/ordenes").then((datos) => datos.data);
  const { data, error, isLoading } = useSWR("/api/ordenes", fetcher, {refreshInterval: 100});

  return (
    <AdminLayout pagina="Admin">
      {/* Título de la página de Resumen */}
      <h1 className="text-4xl font-black">Panel de Administracion</h1>
      {/* Descripción de la página */}
      <p className="text-2xl my-10">Administra Las Ordenes:</p>

      {data && data.length ? (
        data.map((orden) => {
          // Contenido del mapeo de datos (puedes colocar JSX aquí)
          return <Orden key={orden.id} orden={orden}></Orden>;
        })
      ) : (
        <p>No hay datos de orden disponibles.</p>
      )}
    </AdminLayout>
  );
}

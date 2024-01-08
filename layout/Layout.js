import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Modal from "react-modal";
import useQuiosco from "@/hooks/useQuiosco";
import ModalProducto from "../components/ModalProducto";
import { ToastContainer } from "react-toastify";
import Pasos from "../components/Pasos";

import "react-toastify/dist/ReactToastify.css";

// Estilos personalizados para el componente Modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Establece el elemento de la aplicación para el componente Modal
Modal.setAppElement("#__next");

// Página principal que contiene la barra lateral, el contenido principal, y el modal
function IndexPage({ children, pagina }) {
  // Extraer el estado del modal del contexto mediante el hook personalizado useQuiosco
  const { modal } = useQuiosco();

  return (
    <div>
      {/* Configuración de la cabeza de la página */}
      <Head>
        <title>Café - {pagina}</title>
        <meta name="description" content="Quiosco Cafeteria" />
      </Head>

      {/* Diseño de la página con barra lateral, contenido principal, modal y notificaciones */}
      <div className="md:flex">
        {/* Barra lateral */}
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>

        {/* Contenido principal */}
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          {/* Pasos del proceso de pedido y contenido de la página actual */}
          <div className="p-10 mt-10">
            <Pasos />
            {children}
          </div>
        </main>
      </div>

      {/* Modal de producto */}
      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalProducto>Modal</ModalProducto>
        </Modal>
      )}

      {/* Contenedor de notificaciones */}
      <ToastContainer />
    </div>
  );
}

// Exporta la página principal
export default IndexPage;

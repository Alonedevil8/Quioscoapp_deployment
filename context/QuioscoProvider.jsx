import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

// Crear un contexto para compartir el estado entre componentes
const QuioscoContext = createContext();

// Componente proveedor que envuelve la aplicación y proporciona el estado y funciones a los componentes hijos
const QuioscoProvider = ({ children }) => {
  // Estado para almacenar las categorías de productos
  const [categorias, setCategorias] = useState([]);
  // Estado para la categoría actual seleccionada
  const [categoriaActual, setCategoriaActual] = useState({});
  // Estado para almacenar información sobre un producto seleccionado
  const [producto, setProducto] = useState({});
  // Estado para almacenar la lista de productos en el pedido
  const [pedido, setPedido] = useState([]);

  const [nombre, setNombre] = useState("");
  const [total, setTotal] = useState(0);

  // Estado para controlar la visibilidad del modal
  const [modal, setModal] = useState(false);

  //----------------------------------------------------------------------
  const router = useRouter();
  //-------------------------------UseEffect

  // Efecto para cargar las categorías al montar el componente
  useEffect(() => {
    obtenerCategorias();
  }, []);

  // Efecto para establecer la categoría actual cuando cambian las categorías
  useEffect(() => {
    // Selecciona la segunda categoría por defecto (puedes ajustar según tus necesidades)
    setCategoriaActual(categorias[1]);
  }, [categorias]);

  useEffect(() => {
    const nuevoTotal = pedido.reduce(
      (total, producto) => producto.precio * producto.cantidad + total,
      0
    );
    setTotal(nuevoTotal);
  }, [pedido]);

  //----------------------------------------------------------------------

  // Función para obtener las categorías de productos desde la API
  const obtenerCategorias = async () => {
    try {
      const { data } = await axios("/api/categorias");
      setCategorias(data);
    } catch (error) {
      console.error("Error al obtener categorías:", error);
      // Puedes manejar el error de manera apropiada, por ejemplo, mostrando un mensaje al usuario
      toast.error("Error al cargar categorías");
    }
  };

  // Función para manejar el clic en una categoría y actualizar la categoría actual
  const handleClickCategoria = (id) => {
    const categoria = categorias.filter((cat) => cat.id === id);
    setCategoriaActual(categoria[0]);
    router.push("/");
  };

  // Función para establecer el producto seleccionado
  const handleSetProducto = (producto) => {
    setProducto(producto);
  };

  // Función para cambiar la visibilidad del modal
  const handleChangeModal = () => {
    setModal(!modal);
  };

  // Función para agregar un producto al pedido
  const handleAgregarPedido = ({ categoriaId, ...producto }) => {
    if (pedido.some((productoState) => productoState.id === producto.id)) {
      // Si el producto ya está en el pedido, actualiza la cantidad
      const pedidoActualizado = pedido.map((productoState) =>
        productoState?.id === producto.id ? producto : productoState
      );
      setPedido(pedidoActualizado);
      toast.success("Guardado Correctamente");
    } else {
      // Si el producto no está en el pedido, agrégalo
      setPedido([...pedido, producto]);
      toast.success("Agregado Al Pedido");
    }
    // Cierra el modal después de agregar el producto al pedido
    setModal(false);
  };

  // Función para editar la cantidad de un producto en el pedido
  const handleEditarCantidad = (id) => {
    const productoActualizar = pedido.filter((producto) => producto.id === id);
    // Establece el producto seleccionado para editar la cantidad
    setProducto(productoActualizar[0]);
    // Abre el modal para editar la cantidad
    setModal(!modal);
  };

  const handleEliminarProducto = (id) => {
    const pedidoActualizado = pedido.filter((producto) => producto.id !== id);
    setPedido(pedidoActualizado);
  };

  const colocarOrden = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/ordenes", {
        pedido,
        nombre,
        total,
        fecha: Date.now().toString(),
      });

      //Resetear la app
      setCategoriaActual(categorias[0]);
      setPedido([]);
      setNombre("");
      setTotal(0);

      toast.success("Pedido Realizado Correctamente");

      setTimeout(() => {
        router.push("/");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };



  // Proporciona el estado y las funciones a los componentes hijos a través del contexto
  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        producto,
        handleSetProducto,
        modal,
        handleChangeModal,
        handleAgregarPedido,
        pedido,
        handleEditarCantidad,
        handleEliminarProducto,
        nombre,
        setNombre,
        colocarOrden,
        total,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
};

// Exporta el componente proveedor y el contexto
export { QuioscoProvider };
export default QuioscoContext;

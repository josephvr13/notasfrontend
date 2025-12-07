import { useEffect, useState } from "react";
import { obtenerNotas, crearNota, eliminarNota, actualizarNota } from "./api";
import NotaList from "./components/NotaList";
import NotaForm from "./components/NotaForm";
import Modal from "./components/Modal";
import "./styles.css";

export default function App() {
  const [notas, setNotas] = useState([]);
  const [notaEdit, setNotaEdit] = useState(null);
  const [loading, setLoading] = useState(false);

  // Cargar notas desde el backend
  const cargarNotas = async () => {
    setLoading(true);
    try {
      const data = await obtenerNotas();
      setNotas(data);
    } catch (error) {
      console.error("Error al cargar notas:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    cargarNotas();
  }, []);

  // Crear o actualizar nota
  const handleSubmit = async (nota) => {
    try {
      if (notaEdit) {
        await actualizarNota(nota.id, nota);
        setNotaEdit(null);
      } else {
        await crearNota(nota);
      }
      cargarNotas();
    } catch (error) {
      console.error("Error al guardar nota:", error);
    }
  };

  // Eliminar nota
  const handleDelete = async (id) => {
    try {
      await eliminarNota(id);
      cargarNotas();
    } catch (error) {
      console.error("Error al eliminar nota:", error);
    }
  };

  return (
    <div className="page">
      <h1>Gestor de Notas</h1>

      {/* Formulario de agregar nota */}
      <div className="form-wrapper">
        <h2>Agregar Nota</h2>
        {!notaEdit && <NotaForm onSubmit={handleSubmit} />}
      </div>

      {/* Modal para editar nota */}
      {notaEdit && (
        <Modal onClose={() => setNotaEdit(null)}>
          <h2>Editar Nota</h2>
          <NotaForm nota={notaEdit} onSubmit={handleSubmit} />
        </Modal>
      )}

      {/* Lista de notas */}
      {loading ? (
        <p>Cargando notas...</p>
      ) : (
        <div className="grid">
          <NotaList notas={notas} onEdit={setNotaEdit} onDelete={handleDelete} />
        </div>
      )}
    </div>
  );
}

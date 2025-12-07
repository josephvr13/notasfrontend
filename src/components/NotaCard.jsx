export default function NotaCard({ nota, onDelete, onEdit }) {

  // Evita que React explote si nota no existe
  if (!nota || typeof nota !== "object") {
    return null;
  }

  const { titulo = "Sin título", contenido = "Sin contenido" } = nota;

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
      <h3 className="text-xl font-bold mb-2">{titulo}</h3>
      <p className="text-gray-700 mb-4">{contenido}</p>

      <div className="flex gap-2">
        <button
          onClick={() => onEdit(nota)}
          className="flex-1 bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600"
        >
          Editar
        </button>

        <button
          onClick={() => onDelete(nota.id)}
          className="flex-1 bg-red-500 text-white py-2 rounded-xl hover:bg-red-600"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

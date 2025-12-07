export default function NotaList({ notas, onEdit, onDelete }) {
  if (notas.length === 0) return <p>No hay notas</p>;

  return notas.map((nota) => (
    <div key={nota.id} className="nota-card">
      <h3>{nota.titulo}</h3>
      <p>{nota.contenido}</p>
      <div className="card-actions">
  <button onClick={() => onEdit(nota)}>Editar</button>
  <button className="btn-delete" onClick={() => onDelete(nota.id)}>Eliminar</button>
</div>

    </div>
  ));
}

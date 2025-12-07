import { useState, useEffect } from "react";

export default function NotaForm({ nota, onSubmit }) {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  useEffect(() => {
    if (nota) {
      setTitulo(nota.titulo);
      setContenido(nota.contenido);
    }
  }, [nota]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo.trim() || !contenido.trim()) return;
    onSubmit({
      id: nota?.id,
      titulo,
      contenido,
    });
    setTitulo("");
    setContenido("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <textarea
        placeholder="Contenido"
        value={contenido}
        onChange={(e) => setContenido(e.target.value)}
      />
      <button type="submit">{nota ? "Actualizar" : "Agregar"}</button>
    </form>
  );
}

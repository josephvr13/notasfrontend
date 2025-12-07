// api.js
// URL del backend: usa la variable de entorno REACT_APP_API_URL, con fallback seguro
const API_URL = process.env.REACT_APP_API_URL || "https://notasbackend-1.onrender.com";

// -----------------------------
// FUNCIONES CRUD
// -----------------------------

// Obtener todas las notas
export const obtenerNotas = async () => {
  try {
    const res = await fetch(`${API_URL}/notas`);
    if (!res.ok) throw new Error(`Error al obtener notas: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Error al cargar notas:", error);
    return []; // devuelve array vacío si falla
  }
};

// Crear nota
export const crearNota = async (nota) => {
  try {
    const res = await fetch(`${API_URL}/notas`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nota),
    });
    if (!res.ok) throw new Error(`Error al crear nota: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Error al guardar nota:", error);
  }
};

// Actualizar nota
export const actualizarNota = async (id, nota) => {
  try {
    const res = await fetch(`${API_URL}/notas/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nota),
    });
    if (!res.ok) throw new Error(`Error al actualizar nota: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Error al actualizar nota:", error);
  }
};

// Eliminar nota
export const eliminarNota = async (id) => {
  try {
    const res = await fetch(`${API_URL}/notas/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) throw new Error(`Error al eliminar nota: ${res.status}`);
    return await res.json();
  } catch (error) {
    console.error("Error al eliminar nota:", error);
  }
};

const API_URL = "https://notasbackend-1.onrender.com/";


export const obtenerNotas = async () => {
const res = await fetch(`${API_URL}/notas`);
return await res.json();
};


export const crearNota = async (nota) => {
await fetch(`${API_URL}/notas`, {
method: "POST",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(nota),
});
};


export const actualizarNota = async (id, nota) => {
await fetch(`${API_URL}/notas/${id}`, {
method: "PUT",
headers: { "Content-Type": "application/json" },
body: JSON.stringify(nota),
});
};


export const eliminarNota = async (id) => {
await fetch(`${API_URL}/notas/${id}`, {
method: "DELETE",
});
};

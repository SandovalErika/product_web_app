export const fetchProductById = async (id: string) => {

  const pictureId = Number(id) - 1

  const response = await fetch(`http://localhost:5000/${pictureId}`);
  if (!response.ok) {
    throw new Error('Error al cargar el producto');
  }
  return response.json();
};
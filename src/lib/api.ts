import data from '../../db.json';

export const fetchProductById = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const product = data.find((el: any) => el.id === parseInt(id));
  if (!product) {
    throw new Error('Producto no encontrado');
  }
  return product;
};

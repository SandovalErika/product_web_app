import React from "react";

import ProductCard from "./ProductCard";

import styles from "../styles/products/ProductList.module.css";

interface Product {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  imagen: string;
  rating: number;
  categoria: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className={styles.productList}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          titulo={product.titulo}
          descripcion={product.descripcion}
          precio={product.precio}
          imagen={product.imagen}
          rating={product.rating}
          categoria={product.categoria}
        />
      ))}
    </div>
  );
};

export default ProductList;

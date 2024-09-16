"use client";
import React, { useState } from 'react'; 

import ProductList from '../../component/ProductList'; 
import data from '../../../db.json'; 

import styles from '../../styles/products/ProductsPage.module.css'; 

interface Product {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  imagen: string;
  rating: number;
  categoria: string;
}

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(data);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    filterProducts(term);
  };

  const filterProducts = (term: string) => {
    const lowerCaseTerm = term.toLowerCase();
    const filtered = data.filter((product: Product) =>
      product.titulo.toLowerCase().includes(lowerCaseTerm)
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Product List</h1>
      <p className={styles.description}>Encuentra los productos que más te gustan</p>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
      </div>
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ProductsPage;

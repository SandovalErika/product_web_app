"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

import styles from "../styles/products/ProductCard.module.css";

interface ProductCardProps {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  imagen: string;
  rating: number;
  categoria: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  titulo,
  categoria,
  descripcion,
  precio,
  rating,
  imagen,
}) => {
  const router = useRouter();

  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    router.push(`/products/${id}`);
  };

  const handleFavoriteClick = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productImage}>
        <img src={imagen} alt={titulo} />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{titulo}</h3>
        <h4 className={styles.productSubtitle}>{categoria}</h4>

        <div className={styles.productRating}>
          <p className={styles.productDescription}>{descripcion}</p>
          <span
            className={`${styles.star} ${isFavorite ? styles.favorite : ""}`}
            onClick={handleFavoriteClick}
          >
            ★
          </span>
          <span>{rating}</span>
        </div>
        <div className={styles.productPrice}>${precio}</div>
        <button className={styles.viewButton} onClick={handleClick}>
          Ver
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

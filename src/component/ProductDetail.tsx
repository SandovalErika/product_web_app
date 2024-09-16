"use client";
import React from "react";

import styles from "../styles/products/ProductDetail.module.css";

interface ProductDetailProps {
  product: {
    titulo: string;
    descripcion: string;
    precio: number;
    imagen: string;
    rating: number;
    categoria: string;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <>
      <div className={styles.productDetail}>
        <div className={styles.productDetail_left}>
          <div className={styles.productDetail_image}>
            <img src={product.imagen} alt={product.titulo} />
          </div>
          <p className={styles.productDetail_description}>
            {product.descripcion}
          </p>
        </div>
        <div className={styles.productDetail_right}>
          <div className={styles.productDetail_title_and_rating}>
            <h2 className={styles.productDetail_title}>{product.titulo}</h2>
            <div className={styles.productDetail_rating}>
              ⭐ {product.rating}
            </div>
          </div>

          <span className={styles.productDetail_price}>${product.precio}</span>
          <div className={styles.productDetail_extra}>
            <ul>
              <li>Ver los medios de pago</li>
              <li>Más formas de entrega</li>
              <li>Tenés 30 días desde que lo recibís.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;

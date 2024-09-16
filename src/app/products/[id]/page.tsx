"use client";
import React, { useEffect, useState } from 'react'; 
import { useParams, useRouter } from 'next/navigation';

import { fetchProductById } from '../../../lib/api'; 
import ProductDetail from '../../../component/ProductDetail';

import styles from '../../../styles/products/ProductDetailPage.module.css';


interface Product {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  imagen: string;
  rating: number;
  categoria: string;
}

const ProductDetailPage = () => {
  const { id } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const data = await fetchProductById(id as string);
        setProduct(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!product) return <div className={styles.notFound}>Producto no encontrado</div>;

    const handleBack = () => {
      router.push('/products');
    };

  return (
    <>
    <div className={styles.productDetailContainer}>
      <ProductDetail product={product} />
    
    </div>
    <div className={styles.button_container}>
        <button className={styles.button_back} onClick={handleBack}>Volver</button>
      </div>
    </>
    
  );
};

export default ProductDetailPage;

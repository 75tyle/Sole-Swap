import React, { useEffect, useState } from 'react';
import './CSS/Product.css';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Product = ({product}) => {
  let { id } = useParams();
  const [product_id, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4011/api/products/getproducts/${id}`);
        setProduct(response.data); // Assuming the response contains product data
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className='product'>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ProductDisplay product={product_id} />
      )}
    </div>
  );
};

export default Product;

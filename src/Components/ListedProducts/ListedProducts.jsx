import React, { useEffect, useState } from 'react';
import './ListedProducts.css';
import Item from '../Item/Item';
import axios from 'axios';

const ListedProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4011/api/products/getproducts');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='listedproducts'>
      <h1>Listed Products</h1> 
      <div className="products">
        {products.map((product, index) => (
          <Item key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ListedProducts;

import React, { useEffect, useState } from 'react';
import './ProductDisplay.css';
import axios from 'axios';

const ProductDisplay = ({ product }) => {
  const [fetchedProduct, setFetchedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4011/api/products/getproducts/' + product._id);
        setFetchedProduct(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [product._id]);

  return (
    <div className='productdisplay'>
      {fetchedProduct && (
        <>
          <div className="productdisplay_left">
            <img src={"http://103.255.39.101/Images/Sole-swap/"+fetchedProduct.Img} alt={fetchedProduct.Product_Name} />
            <h1>{fetchedProduct.Product_Name}</h1>
            <p>{fetchedProduct.Product_Description}</p>
          </div>
          <hr />
          <div className="productdisplay_right">
            <div className="currentbid">
              <h1>Current Bid - ${fetchedProduct.Product_Price}</h1>
            </div>
            <div className="place_bid">
              <input type="numeric" placeholder='Place bid'/>
              <button>Bid</button>
            </div>
            <div className="listedtime">
              <h1>Ends in 12:00:00</h1>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDisplay;

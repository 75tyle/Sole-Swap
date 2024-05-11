import React, { useEffect, useState } from 'react';
import './ProductDisplay.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDisplay = ({ product }) => {
  let { id } = useParams();
  const [productPrice, setProductPrice] = useState(product ? product.product.Product_Price : 0);
  const [bidAmount, setBidAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [end, setEnd] = useState(product.Bid_data?product.Bid_data.end:0);
  const [bids, setBids] = useState(product.Bid_data?product.Bid_data.Bid_data:[]);
  const [error, setError] = useState(null);

  const user_id = localStorage.getItem("userId");

  const handleBid = async () => {
    try {
      setLoading(true);
      const bidData = {
        product_id: id,
        product_name: product.Product_Name,
        user_id: user_id, 
        amount: bidAmount
      };
      const response = await axios.post('http://localhost:4011/api/bid/create', bidData);
      console.log('Bid successful:', response.data);
      setBidAmount(response.data.Amount);
      setProductPrice(response.data.Amount);
      setEnd(response.data.Data[0].end);
      setBids(response.data.Data[0].Bid_data);
      // Update productPrice state with the new bid amount
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Fetch bid data
  }, [setBidAmount]);


  return (
    <div className='productdisplay'>
      {product && (
        <>
          <div className="productdisplay_left">
            <img src={"http://103.255.39.101/Images/Sole-swap/"+product.product.Img} alt={product.Product_Name} />
            <h1>{product.product.Product_Name}</h1>
            <p>{product.product.Product_Description}</p>
          </div>
          <hr />
          <div className="productdisplay_right">
            <div className="currentbid">
              <h1>Current Bid - ${productPrice}</h1>
            </div>
            <div className="place_bid">
              <input 
                type="number" 
                placeholder='Place bid'
                value={bidAmount}
                disabled={loading}
                onChange={(e) => setBidAmount(e.target.value)}
              />
              <button onClick={handleBid} disabled={bidAmount <= productPrice || loading}>Bid</button>
            </div>
            <div className="listedtime">
              <h1>Ends in {end}</h1>
            </div>
            <div>
              {loading && <p>Submitting bid...</p>}
              {error && <p>Error: {error}</p>}
            </div>
            <div className="bidding_list">
              <div className="wrapper">
                <h2>Bidding List</h2>
                <ul>
                  {bids.map((bid, index) => (
                    <li key={index}>
                      <span>{bid.User_name}-</span>
                      <span>${bid.Bid}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDisplay;

import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import Product from '../../Pages/Product';

const Item = ({ product }) => {
  return (
    <div className='item'>
      <Link to={"/product/" + product._id} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', color: 'black', alignItems: 'center' }}>
        <img onClick={() => window.scrollTo(0, 0)} src={"http://103.255.39.101/Images/Sole-swap/"+product.Img} alt={product.Product_Name} />
        <p>{product.Product_Name}</p>
        <div className="highestbid"><button>Highest Bid ${product.Product_Price}</button></div>
      </Link>
    </div>
  );
};

export default Item;

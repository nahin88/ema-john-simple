import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Product.css";
const Product = (props) => {
    // console.log(props);
    const { img, name, price, ratings, seller } = props.product;
    
   const handleAddCart = props.handleAddCart;


  return (
    <div className="single-product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
          <button onClick={() => handleAddCart(props.product)} className="btn-cart">
              add to cart
              <FontAwesomeIcon icon={faShoppingCart} />
          </button>
    </div>
  );
};

export default Product;

import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
    // const cart = props.cart; option1
    // const { cart } = props; option2
    console.log(cart);

    let price = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        // console.log(product);
        if (product.quantity == 0) {
            product.quantity = 1;
        }
        // product.quantity = product.quantity || 1;
        price = price + product.price * product.quantity;
        shipping = shipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }

    const tax = price * 7 / 100;
    const grandTotal = price + shipping + tax;


  return (
    <div className="cart">
      <h4>Order-Summary</h4>
          <p>selected item: {quantity}</p>
          <p>Total Price: ${ price}</p>
          <p>Total Shipping Charge: ${ shipping}</p>
          <p>Tax: ${ tax.toFixed(2)}</p>
          <h5>Grand Total: ${ grandTotal.toFixed(2)}</h5>
    </div>
  );
};

export default Cart;

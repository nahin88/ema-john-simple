import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../fakeData/fakeDb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    //step 1: get id of the addedProduct

    const storedCart = getShoppingCart();
    const savedCart = [];

    //step 2: get product from products state by using id
    for (const id in storedCart) {
      const addedProduct = products.find(product => product.id === id);

      //step 3: add quantity
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        
        //step 4: add the added product to the saved cart
        savedCart.push(addedProduct);
      }
    }
    //step 5: set the cart 
    setCart(savedCart);
  },[products])

  const handleAddCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddCart={handleAddCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;

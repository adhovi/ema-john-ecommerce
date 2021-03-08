import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fakeData from "../../fakeData";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Filter from "../Filter/Filter";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState(fakeData);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const reviewCarts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(reviewCarts);
  }, []);

  const handleAddProduct = (product) => {
    const toBeAdded = product.key;
    const sameProduct = cart.find((pd) => pd.key === toBeAdded);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = cart.filter((pd) => pd.key !== toBeAdded);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDatabaseCart(product.key, count);
  };
  return (
    <div className="container">
      <Filter setProducts={setProducts}></Filter>
      <div className="row">
        <div className="col-md-9 col-sm-8 col-7">
          <div className="row">
            {products.map((product) => (
              <Product
                key={product.key}
                product={product}
                handleAddProduct={handleAddProduct}
              ></Product>
            ))}
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-5">
          <Cart cart={cart}>
            <Link to="/review">
              <button className="btn btn-dark">Order Review</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fakeData from "../../fakeData";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [placedOrder, setPlacedOrder] = useState(false);

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

  const handleRemoveItem = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  const placeOrder = () => {
    setPlacedOrder(true);
    processOrder();
    setCart([]);
  };
  const placedOrderText = <h2 className="text-center mt-5">Order Placed!!</h2>;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9 col-sm-8 col-7">
          {placedOrder && placedOrderText}
          {cart.map((pd) => (
            <ReviewItem
              key={pd.key}
              product={pd}
              handleRemoveItem={handleRemoveItem}
            ></ReviewItem>
          ))}
        </div>
        <div className="col-md-3 col-sm-4 col-5">
          <Cart cart={cart}>
            <Link to="/review">
              <button onClick={placeOrder} className="btn btn-dark">
                Place Order
              </button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Review;

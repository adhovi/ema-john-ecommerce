import React from "react";
import "./Cart.css";

function Cart(props) {
  let { cart, children } = props;
  const total = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const shipping = cart.reduce((shipping, product) => {
    if (product.price > 35) {
      shipping += 0;
    } else if (product.price > 15) {
      shipping += 4.99;
    } else if (product.price > 0) {
      shipping += 12.99;
    }
    return shipping;
  }, 0);
  const tax = total / 10;
  const formatNumber = (num) => {
    num = num.toFixed(2);
    num = Number(num);
    return num;
  };

  return (
    <div className="cart">
      <h3 className="text-center">Order Summery</h3>
      <p className="text-center">Items ordered: {cart.length}</p>
      <div className="d-flex justify-content-center">
        <table>
          <tbody>
            <tr>
              <td>Items:</td>
              <td>${formatNumber(total)}</td>
            </tr>
            <tr>
              <td>Shipping & Handling:</td>
              <td>${formatNumber(shipping)}</td>
            </tr>
            <tr>
              <td>Total before tax:</td>
              <td>${formatNumber(total + shipping)}</td>
            </tr>
            <tr>
              <td>Estimated Tax:</td>
              <td>${formatNumber(tax)}</td>
            </tr>
            <tr className="total-row">
              <td>Order Total:</td>
              <td>${formatNumber(total + shipping + tax)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div className="text-center">{children}</div>
    </div>
  );
}

export default Cart;

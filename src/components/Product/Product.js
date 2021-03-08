import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, seller, price, stock, quantity } = props.product;
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card m-2 p-4 my-card">
        <img className="card-img-top" src={img} alt={name} />
        <div className="card-body mt-3">
          <h6 className="card-title my-title">{name}</h6>
          <div className="card-text">
            <div className="d-flex justify-content-between">
              <p>By: {seller}</p>
              <p>Price: {price}</p>
            </div>
            <div className="d-flex justify-content-between">
              <p className="text-danger">
                Items Left: {stock - (quantity || 0)}
              </p>
              <p className="text-danger">Quantity: {quantity || 0}</p>
            </div>
          </div>
          <div className="text-center">
            <button
              onClick={() => props.handleAddProduct(props.product)}
              className="btn btn-dark"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

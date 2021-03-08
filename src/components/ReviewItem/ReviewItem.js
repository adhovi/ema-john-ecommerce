import React from "react";

const ReviewItem = (props) => {
  const { name, img, seller, price, quantity, key } = props.product;

  return (
    <div className="card m-2 p-4 my-card ">
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <img className="card-img-top" src={img} alt={name} />
        </div>
        <div className="col-md-8 text-center text-md-start">
          <div className="card-body mt-3">
            <h6 className="card-title text-primary">{name}</h6>
            <div className="card-text">
              <p>By: {seller}</p>
              <p>Price: {price}</p>
              <p>Quantity: {quantity}</p>
            </div>
            <button
              onClick={() => props.handleRemoveItem(key)}
              className="btn btn-dark"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewItem;

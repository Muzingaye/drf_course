import React from "react";
import { Link } from "react-router-dom";

const OrderCard = ({ order }) => {
  return (
    <div>
      <div className="product-card">
        <img src={order.id} className="product-card-image" />
        <div className="product-card-content">
          <h3 className="product-card-name">{order.name}</h3>
          <p className="product-card-price">{order.price}</p>
          <div className="product-card-action">
            <Link className="btn-btn-primary">View Details</Link>
            <Link className="btn-btn-secondary">Add to Card</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;

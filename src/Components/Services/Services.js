import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";
const Services = ({ data }) => {
  const navigate = useNavigate();
  const navigator = () => {
    navigate(`/checkout/${data.id}`);
  };
  return (
    <div className="service-container shadow rounded">
      <div className="service-image-container">
        <img className="service-image" src={data?.image} alt="" />
      </div>
      <div className="text">
        <h3>{data?.package}</h3>
        <p>{data?.shortDescription}</p>
        <p>Price: ${data?.price}</p>
        <div className="book-now">
          <button onClick={navigator} className="btn btn-dark">
            Book Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;

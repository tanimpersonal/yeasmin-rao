import React from "react";
import "./Services.css";
const Services = ({ data }) => {
  console.log(data);
  return (
    <div className="col service-container shadow rounded">
      <div className="service-image-container">
        <img className="service-image" src={data.image} alt="" />
      </div>
      <div className="text">
        <h3>{data.package}</h3>
        <p>{data.shortDescription}</p>
        <p>Price: ${data.price}</p>
        <div className="book-now">
          <button className="btn btn-primary">Book Now!</button>
        </div>
      </div>
    </div>
  );
};

export default Services;

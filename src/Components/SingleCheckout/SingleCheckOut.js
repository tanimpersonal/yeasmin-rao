import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useData from "../Utility/useData";
import "./SingleCheckOut.css";
const SingleCheckOut = () => {
  const params = useParams();
  const datas = useData();
  let para = parseInt(params.checkoutItem);
  const filteredData = datas.find((data) => {
    if (data.id === para) {
      return data;
    }
  });

  return (
    <div className="selected-package">
      <div className="heading d-flex justify-content-center">
        <h1>You have selected: </h1>
      </div>
      <div className="package d-flex justify-content-center">
        <div className="package-container text-center">
          <div className="image">
            <img src={filteredData?.image} alt="" />
          </div>
          <div className="text">
            <h1>{filteredData?.package}</h1>
            <h2>Price: ${filteredData?.price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCheckOut;

import React from "react";
import nofound from "../../images/404.jpeg";
const NotFound = () => {
  return (
    <div className="my-5 w-100">
      <img className="w-100" src={nofound} alt="" />
    </div>
  );
};

export default NotFound;

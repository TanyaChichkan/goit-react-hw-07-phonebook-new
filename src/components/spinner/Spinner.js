import React from "react";
import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <div style={{ width: "500px", textAlign: "center" }}>
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Spinner;

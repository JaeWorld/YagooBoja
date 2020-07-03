import React from "react";
import Ballpark from "./BallPark";

const Container = (props) => {
  return (
    <div className="ballpark-info">
      <span>
        <h3>야구장 정보</h3>
      </span>
      <Ballpark />
    </div>
  );
};

export default Container;

import React, { useEffect, useState } from "react";
import data from "../data/data.json";

function BallPark({ match }) {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const items = data.find((data) => {
      if (data.id === match.params.id) {
        return data;
      }
    });
    console.log(items);

    setItems(items);
  };

  return (
    <div className="ballpark-detail">
      <h1>{items.name}</h1>
      <span>주소 : {items.location}</span>
      <span>수용 인원 : {items.capacity}</span>
    </div>
  );
}

export default BallPark;

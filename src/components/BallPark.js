import React, { useEffect, useState } from "react";
import data from "../data/data.json";
import Detail from "./Detail";
import { Link } from "react-router-dom";

function BallPark() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const items = data;
    console.log(items);

    setItems(items);
  };

  return (
    <div className="ballpark-container">
      {items.map((item, i) => {
        return (
          <Link
            to={`/${item.id}`}
            className="ballpark"
            key={i}
            style={{ backgroundImage: `url('../${item.image}')` }}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
}

export default BallPark;

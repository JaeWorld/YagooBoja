import React from "react";
import data from "../data/data.json";

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(
  require.context("../img", false, /\.(png|jpe?g|svg)$/)
);

class BallPark extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick(e) {
    var index = -1;
    var filteredObj = data.find((item, i) => {
      if (item.id == e.target.id) {
        index = i;
        return i;
      }
    });
    var targetData = data[index];
    console.log(targetData);
  }
  render() {
    console.log(images);
    return (
      <div className="ballpark-container">
        {data.map((data, i) => {
          return (
            <a
              href="#"
              key={i}
              className="ballpark"
              id={data["id"]}
              style={{
                backgroundImage: `url(${images[i]})`,
              }}
              onClick={this.handleClick.bind(this)}
            >
              {data["name"]}
            </a>
          );
        })}
      </div>
    );
  }
}

export default BallPark;

import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <a href="#" className="logo">
            야구보자
          </a>
        </div>
        <div className="header-right">
          <div className="today-info">
            <span>오늘의 날씨</span>
            <div className="date">{new Date().toDateString()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

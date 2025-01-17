import React, { Component } from "react";
import Counter from "../counter";
import SearchForm from "../searchForm";
import "./header.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <div className="div-container">
        <Counter />
        <SearchForm />
      </div>
    );
  }
}

export default Header;
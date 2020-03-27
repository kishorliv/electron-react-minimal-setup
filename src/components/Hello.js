import React, { Component } from "react";
import ReactDOM from "react-dom";

const Hello = () => {
  return <h1>Hello world!</h1>
};

export default Hello;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Hello />, wrapper) : false;
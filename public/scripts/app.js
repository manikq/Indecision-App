"use strict";

console.log("App is running!");

// JSX- Javascript XML

var template = React.createElement(
  "h1",
  null,
  "This is JSX"
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

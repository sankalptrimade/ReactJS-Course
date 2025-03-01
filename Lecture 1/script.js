// // In the second argument inside object basically we can pass the attributes like id, classname etc.
// const heading = React.createElement(
//   "h1", //tag
//   { id: "heading" },     // object of attributes
//   "This element is created using react"     //innerHTML content
// );

// // If you see the output in console it will object having some props like h1 tag, all the attributes object and the innerHTML content
// // console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading); // React.render this line will attach innerHTML to the root it means if something already is present in the root like any of the elments it will replace them with this heading

/*
What if we want to create HTML layout like this:

<div id = "parent">
    <div id = "child">
        <h1>I am an h1 tag</h1>
    </div>
</div>

*/

// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I am an h1 tag")
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/*
Inside we have two sibilings h1 and h2

<div id = "parent">
    <div id = "child">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
</div>
we will pass it as an array
*/

// const heading = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//       "div",
//       { id: "child" },
//       [React.createElement("h1", {}, "I am an h1 tag"), React.createElement("h2", {}, "I am an h2 tag")]
//     )
//   );

//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(heading);

/*
Inside we have two sibilings child1 and child2

<div id = "parent">
    <div id = "child1">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
    <div id = "child2">
        <h1>I am an h1 tag</h1>
        <h2>I am an h2 tag</h2>
    </div>
</div>

again we will pass it as an array 
*/

import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child1" }, [
//       React.createElement("h1", {}, "Hi sankalp"),
//       React.createElement("h2", {}, "I am an h2 tag"),
//     ]),
//     React.createElement("div", { id: "child2" }, [
//       React.createElement("h1", {}, "I am an h1 tag"),
//       React.createElement("h2", {}, "I am an h2 tag"),
//     ]),
//   ]);

// Introducing JSX
// Single-line
const jsxHeading = <h1>This is heading inside JSX</h1>;

// Multi-Line if you are using nested elements because Babel wants to know from where the JSX is starting and ending so we are using () brackets.
// const jsxHeading = (
// <h1>This is heading inside JSX</h1>
// );

// React Fucntional Component
// const HeadingComponent = () => {
//     return (
//         <h1>
//             This is a Functional Based Component
//         </h1>
//     );
// }

// If you want to add a noraml JS function or any react element you render inside {}
const elem = <span>This is a span tag</span>;

const number = 1000;

const HeadingComponent = () => {
  return (
    <div id="container">
      {number}
      <h1>This is a Functional Based Component</h1>
      {elem}
    </div>
  );
};

// What if I want to call a javascript funciton inside my compnent

const root = ReactDOM.createRoot(document.getElementById("root"));
//   if you have to render a react element
//   root.render(jsxHeading);
//  if you have to render a component
root.render(<HeadingComponent />);

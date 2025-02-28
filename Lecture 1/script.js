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

const heading = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1", {}, "I am an h1 tag"),
      React.createElement("h2", {}, "I am an h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "I am an h1 tag"),
      React.createElement("h2", {}, "I am an h2 tag"),
    ]),
  ]);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(heading);
  
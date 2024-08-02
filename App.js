const heading = React.createElement(
  "h1",
  { id: "title" },
  "hello world from react"
);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, "child1"),
  React.createElement("div", { id: "child" }, "child2"),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([heading, parent]);

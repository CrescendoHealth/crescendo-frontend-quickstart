import * as React from "react";
import * as ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <p>
        Data is available at:{" "}
        <code>
          <a target="_blank" href="/api/data.json">
            /api/data.json
          </a>
        </code>
      </p>
    </div>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("app"));
});

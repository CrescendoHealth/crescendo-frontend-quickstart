const express = require("express");
const randomWords = require("random-words");
const { webpack } = require("webpack");
const open = require("open");

const app = express();

// Run webpack dev server

const compiler = webpack(require("./webpack.config"));
app.use(require("webpack-dev-middleware")(compiler, { stats: "minimal" }));
app.use(require("webpack-hot-middleware")(compiler));

// API endpoints

app.get("/api/data.json", (_, res) => {
  const rows = [];
  for (let i = 0; i < 100; i++) {
    rows.push(randomWords({ exactly: 4, wordsPerString: 2, separator: "-" }));
  }
  res.send(rows);
});

app.listen(3030, () => {
  console.log("Running at http://localhost:3030");
  console.log("Data is available at http://localhost:3030/api/data.json");
  open("http://localhost:3030");
});

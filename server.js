const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send(
    '<h1>99 Bottles of beer on the wall</h1> <a href="/98"><h1>Take one down, pass it around</h1></a>'
  );
});

app.get("/:number_of_bottles", function (req, res) {
  const link =
    req.params.number_of_bottles > 0
      ? `<a href="/${
          req.params.number_of_bottles - 1
        }"><h1>Take one down, pass it around</h1></a>`
      : `<a href="/"><h1>Start over</h1></a>`;
  res.send(
    `<h1>${
      req.params.number_of_bottles
    } Bottles of beer on the wall.</h1> ${link}`
  );
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});

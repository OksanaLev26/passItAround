const express = require("express");

const app = express();

const getRandomNumber = () => {
  return Math.floor(Math.random() * 200) + 1;
};

app.get("/", function (req, res) {
  res.send(
    '<h1>99 Bottles of beer on the wall</h1> <a href="/98"><h1>Take one down, pass it around</h1></a>'
  );
});

app.get("/bugs", function (req, res) {
  const randomNumber = getRandomNumber();

  res.send(
    `<h1>99 little bugs in the code</h1> <a href="/bugs/${randomNumber}"><h1>Take one down, patch it around</h1></a>`
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
    `<h1>${req.params.number_of_bottles} Bottles of beer on the wall.</h1> ${link}`
  );
});

app.get("/bugs/:number_of_bugs", function (req, res) {
  const randomNumber = getRandomNumber();
  const link =
    req.params.number_of_bugs > 0
      ? `<a href="/bugs/${randomNumber}"><h1>Take one down, patch it around</h1></a>`
      : `<a href="/bugs"><h1>Start over</h1></a>`;
  res.send(
    `<h1>${req.params.number_of_bugs} little bugs in the code</h1> ${link}`
  );
});

app.listen(3000, function () {
  console.log("Listening on port 3000");
});

const express = require("express");
const cors = require("cors");

const db = [
  { title: "title 1" },
  { title: "title 2" },
  { title: "title 3" },
  { title: "title 3" },
];

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));

server.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});

server.get("/", (req, res) => {
  // res.json(db);
  res.render("index", { destinations: db });
});

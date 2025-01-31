const fs = require("fs");
const path = require("path");
const fs = require("fs");
// import express from "express";

const app = express();
const port = 4000;

app.use(express.json());

app.use((req, res, next) => {
  console.log({
    msg: "From middleware",
    result: `You have visited ${req.url}`,
  });
  next();
});

app.get("/", (req, res) => {
  res.status(200).send({ msg: "It's working" });
});

app.get("/about", (req, res) => {
  res.status(200).send({ msg: "This is about page" });
});

app.get("/feedback", (req, res) => {
  res.status(200).send({ msg: "This is feedback page" });
});

app.get("/write", (req, res) => {
  fs.writeFileSync("data.txt", "Hey Middleware \n", "utf-8");
  res.status(200).send({ msg: "This is write page" });
});

app.get("/read", (req, res) => {
  const data = fs.readFileSync("data.txt", "utf-8");
  res.status(200).send({ msg: "This is read page", data });
});

app.get("/append", (req, res) => {
  const data = fs.appendFileSync(
    "data.txt",
    "I understand middleware \n",
    "utf-8"
  );
  res.status(200).send({ msg: "This is append page", data });
});

// app.get("/delete", (req, res) => {
//   fs.unlinkSync("data.txt");
//   res.status(200).send({ msg: "This is delete page", data });
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
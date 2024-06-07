import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", { message: "Enter your name below!" });
});

app.post("/submit", (req, res) => {
  const letters = (req.body.fname + req.body.lname).length;
  res.render("index.ejs", {
    message: `You have ${letters} letters in your name!`,
  });
});

app.listen(3000, () => console.log("Listening on http://localhost:3000"));

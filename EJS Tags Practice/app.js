import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<em>This is some em text</em>",
  };

  res.render("index.ejs", { data });
});

app.listen(3000, () => console.log("Listening on http://localhost:3000"));

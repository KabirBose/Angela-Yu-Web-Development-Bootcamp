import express from "express";

const app = express();
app.use(express.json());

const checkDay = (req, res, next) => {
  req.day = new Date().getDay();
  req.type = "";

  if (req.day === 0 || req.day === 6) {
    req.type = "weekend";
  } else {
    req.type = "weekday";
  }

  next();
};

app.use(checkDay);

app.get("/", (req, res) => {
  res.render("index.ejs", { dayType: req.type });
});

app.listen(3000, () => console.log("Listening to http://localhost:3000"));

//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(bodyParser.urlencoded({ extended: true }));

const checkPass = (req, res, next) => {
  req.isAuthorized = false;

  if (req.body.password === "ILoveProgramming") {
    req.isAuthorized = true;
  } else {
    req.isAuthorized = false;
  }

  next();
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use(checkPass);

app.post("/check", (req, res) => {
  if (req.isAuthorized) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});

app.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});

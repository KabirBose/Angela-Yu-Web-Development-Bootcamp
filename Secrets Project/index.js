import axios from "axios";
import bodyParser from "body-parser";
import express from "express";

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  let secret;
  let user;

  try {
    const request = await axios.get(
      "https://secrets-api.appbrewery.com/random"
    );
    secret = request.data.secret;
    user = request.data.username;
  } catch (error) {
    console.error(error.response.data);
  }

  res.render("index.ejs", { secret, user });
});

app.listen(3000, () => console.log("Listening on http://localhost:3000"));

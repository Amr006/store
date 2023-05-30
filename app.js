const express = require("express");
const app = express();
app.set("view engine", "ejs");
const bodyparse = require("body-parser");
app.use(express.static("public"));
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
const ip = "localhost";

const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);

let data;

async function read() {
  try {
    const jsonString = await readFileAsync("./api.json", "utf8");
    data = JSON.parse(jsonString);
  } catch (error) {
    console.error("Error reading JSON file:", error);
  }
}

app.listen(8080, () => {
  console.log(`App listening at http://${ip}:8080`);
});

app.get("/", async (req, res) => {
  await read();
  console.log(data);
  res.render("index", { data: data });
});

app.post("/save", (req, res) => {
  const data = req.body;
  console.log(data);
  console.log("hello!!");
  const jsonString = JSON.stringify(data, null, 2);

  fs.writeFile("./api.json", jsonString, "utf8", (err) => {
    if (err) {
      console.error("Error writing file:", err);
    } else {
      console.log("Data saved successfully");
    }
  });
});


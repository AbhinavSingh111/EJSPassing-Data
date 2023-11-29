import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {res.render('index.ejs')});

app.post("/submit", (req, res) => {
  const f = req.body.fName;
  const l = req.body.lName;
  const tlet = f.length+l.length;
  res.render('index.ejs',{count : tlet})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

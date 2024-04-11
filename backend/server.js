import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { writeFileSync, readFileSync } from "node:fs";

const app = express();
const port = 3000;

// Handling File
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const resultsFile = path.join(__dirname, "data", "results.json");

// middleWares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.get("/", (req, res) => {
//   res.send("<h1>hello world</h1>");
// });

app.get("/questions", (req, res) => {
  const questions = readFileSync(
    path.join(__dirname, "data", "questions.json")
  );
  const parsedQuestions = JSON.parse(questions);
  res.status(200).send(parsedQuestions);
});

// app.get("/results", (req, res) => {
//   const results = readFileSync(resultsFile);
//   const parsedResults = JSON.parse(results);
//   res.status(200).send(parsedResults);
// });

app.put("/results", (req, res) => {
  const newData = req.body;
  const fileData = JSON.parse(readFileSync(resultsFile));
  fileData.push(newData);
  writeFileSync(resultsFile, JSON.stringify(fileData, null, 2));
  res.status(200).sendFile(resultsFile);
});

app.listen(port, () => console.log("Server Running on:", port));

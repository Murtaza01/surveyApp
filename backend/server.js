import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "node:path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { readFileSync } from "node:fs";
import { insertRow, showTable } from "./database.js";

const app = express();
const port = 3000;

// Handling File
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// middleWares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "PUT"],
  })
);

app.get("/", (req, res) => {
  res.send("<h1>SurveyAPI</h1>");
});

app.get("/questions", (req, res) => {
  const questions = readFileSync(
    path.join(__dirname, "data", "questions.json")
  );
  const parsedQuestions = JSON.parse(questions);
  res.status(200).send(parsedQuestions);
});

app.get("/results", async (req, res) => {
  const result = await showTable();
  res.status(200).json(result);
});

app.put("/results", async (req, res) => {
  const data = req.body;
  await insertRow(data);
  const result = await showTable();
  res.status(201).json(result);
});

app.listen(port, () => console.log("Server Running on:", port));

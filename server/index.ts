import cors from "cors";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

import wankulSeason1 from "./wankulCardsS1.json";

// Pour utiliser __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(cors({ origin: ["http://localhost:5173"] }));

app.get("/wankul/season1", (req, res) => {
  res.json(wankulSeason1);
});

const port = 3310;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mysql2 from "mysql2";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

// Pour utiliser __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(cors({ origin: ["http://localhost:5173"] }));

const db = mysql2.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get("/api/season1", (req, res) => {
  const q = "SELECT * FROM season_one";
  db.query(q, (err, data) => {
    if (err)
      return res.json(`Erreur lors de la récupération des cartes : ${err}`);
    return res.json(data);
  });
});

app.get("/api/season1/:id", (req, res) => {
  const cardId = req.params.id;
  const q = "SELECT * FROM season_one WHERE id = ?";
  db.query(q, [cardId], (err, data) => {
    if (err)
      return res.json(`Erreur lors de la récupération de la carte : ${err}`);
    return res.json(data);
  });
});

const port = 3310;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Import core modules
import dotenv from "dotenv";
import fs from "fs/promises";
import mysql from "mysql2/promise";

dotenv.config();

// 1. Connect to your MySQL DB
const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// 2. Read and parse the JSON file
const data = await fs.readFile("./wankulCardsS1.json", "utf-8");
const cards = JSON.parse(data) as {
  id: number;
  name: string;
  img: string;
  season: number;
  set: string;
  cardNumber: number;
  clan: string;
  rarity: string;
  dropRate: number;
  holo: boolean;
  isPossessed: boolean;
  quote: string | null;
}[];

// 3. Insert each card into the database
for (const card of cards) {
  await connection.execute(
    "INSERT INTO season_one (`id`, `name`, `img`, `season`, `set`, `card_number`, `clan`, `rarity`, `drop_rate`, `holo`, `is_possessed`, `quote`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      card.id,
      card.name,
      card.img,
      card.season,
      card.set,
      card.cardNumber,
      card.clan,
      card.rarity,
      card.dropRate,
      card.holo,
      card.isPossessed,
      card.quote,
    ]
  );
}

console.log("✅ Import terminé avec succès");
await connection.end();

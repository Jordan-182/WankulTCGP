import cors from "cors";
import express from "express";

import wankulSeason1 from "./wankulCardsS1.json";

const app = express();

app.use(cors({ origin: ["http://localhost:5173"] }));

app.get("/wankul/season1", (req, res) => {
  res.json(wankulSeason1);
});

const port = 3310;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

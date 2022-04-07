const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const pool = require("./db/db");
const app = express();

const port = process.env.PORT || 3456;
const corsOptions = {
  origin: process.env.URL || "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/leaderboards", async (req, res) => {
  try {
    const boards = await pool.query("SELECT * FROM Leaderboards");
    res.status(200).json(boards.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/leaderboards/:game", async (req, res) => {
  try {
    const { game } = req.params;
    const { player, score } = req.body;
    const board = await pool.query(
      "INSERT INTO leaderboards (game, player, score) VALUES ($1, $2, $3) RETURNING *",
      [game, player, score]
    );

    const del = await pool.query(
      "DELETE FROM leaderboards WHERE game = $1 AND board_id NOT IN (SELECT board_id FROM leaderboards WHERE game =$1 ORDER BY score DESC limit $2);",
      [game, 10]
    );
    res.status(201).json(board.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/leaderboards/:game", async (req, res) => {
  try {
    const { game } = req.params;
    const board = await pool.query(
      "SELECT * FROM leaderboards WHERE game = $1 ORDER BY score DESC",
      [game]
    );
    res.status(200).json(board.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

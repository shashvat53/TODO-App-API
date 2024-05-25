const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;
app.use(express.json());

const todoRoutes = require("./routes/todo");

app.use("/api/v1", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});

const connectWithDB = require("./config/db");
connectWithDB();

app.get("/", (req, res) => {
  res.send(`<h1>This is shashvat home page</h1>`);
});

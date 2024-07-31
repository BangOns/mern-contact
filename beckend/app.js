const express = require("express");
const cors = require("cors");
const UserRoute = require("./routes/userRoutes");
const app = express();
require("dotenv").config();
require("./utils/connect/db");
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(UserRoute);
app.use("/", (req, res) => {
  res.status(404).send("page not found");
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

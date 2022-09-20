const express = require("express");
const app = express();
const connectDB = require("./config/database");
const homeRoutes = require("./routes/home");
const itemRoutes = require("./routes/items");
import path from "path";

require("dotenv").config({ path: "./config/.env" });

connectDB();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", homeRoutes);
app.use("/items", itemRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running on PORT 3000 ...");
});

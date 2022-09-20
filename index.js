const express = require("express");
const app = express();
const connectDB = require("./config/database");
const homeRoutes = require("./routes/home");
const itemRoutes = require("./routes/items");

require("dotenv").config({ path: "./config/.env" });

connectDB();

app.set("view engine", "ejs");
app.set("views", "/views");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", homeRoutes);
app.use("/items", itemRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running on PORT 3000 ...");
});

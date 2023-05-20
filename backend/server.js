const express = require("express");
const chat = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const messageRoutes = require("./router/messageRoute");
const propertyRoutes = require("./router/propertyRouter");

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/chat", (req, res) => {
  res.send(chat);
});

app.use("/api/message", messageRoutes);
app.use("/api/property", propertyRoutes);

app.listen(process.env.PORT, console.log("server started on port 4000"));

require("dotenv").config();
const http = require("http");
const express = require("express");
const cors = require("cors");
const CustomLogger = require("./utils/Logger");
const DBConnect = require("./utils/DB_connect");

// Few Instance Configuration.
const app = express();
const server = http.createServer(app);
const customLogger = new CustomLogger();

// Middleware.
app.use(express.json());
app.use(customLogger.createLogger());
app.use(cors());

// API Endpoints.
app.use("/health_check", (req, res) => {
  return res.status(200).json({
    message: "Success",
  });
});

// Graceful shutdown when 'SIGINT' (Ctrl+C) is received
process.on("SIGINT", () => {
  DBConnect.disconnect(() => {
    console.log("Server is shutting down...");
    process.exit(0);
  });
});

// Launch the Server.
DBConnect.connect();
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

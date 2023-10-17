require("dotenv").config();
const http = require("http");
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const CustomLogger = require("./utils/Logger");
const DBConnect = require("./utils/DB_connect");
const swaggerSpec = require("./utils/Swagger_doc");

// Few Instance Configuration.
const app = express();
const server = http.createServer(app);
const customLogger = new CustomLogger();

// Middleware.
app.use(express.json());
app.use(customLogger.createLogger());
app.use(cors());

// Swagger API Documentation.
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API Endpoints.
app.use("/health_check", (req, res) => {
  return res.status(200).json({
    status: "ok",
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

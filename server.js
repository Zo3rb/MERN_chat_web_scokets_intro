require("dotenv").config();
const http = require("http");
const express = require("express");
const cors = require("cors");
const CustomLogger = require("./utils/Logger");

const app = express();
const server = http.createServer(app);
const customLogger = new CustomLogger();

app.use(express.json());
app.use(customLogger.createLogger());
app.use(cors());

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const fs = require("fs");
const path = require("path");
const colors = require("colors");
const morgan = require("morgan");

class CustomLogger {
  constructor() {
    this.logFilePath = path.join(__dirname, "../logs/error.log");
    colors.setTheme({
      success: "green",
      error: "red",
      info: "blue",
    });
  }

  createLogger() {
    morgan.token("custom", (req, res) => {
      const status = res.statusCode;
      const statusColor = status >= 400 ? "error" : "success";
      return `${colors[statusColor](status)} ${colors.info(
        req.method
      )} ${colors.info(req.originalUrl)}`;
    });

    return morgan(":custom");
  }

  logError(errorMessage) {
    // Create a timestamp for the log entry
    const timestamp = new Date().toISOString();

    // Create the log message with timestamp and error message
    const logMessage = `${timestamp}: ${errorMessage}\n`;

    // Append the log message to the error log file
    fs.appendFile(this.logFilePath, logMessage, (err) => {
      if (err) {
        console.error("Error writing to error log:", err);
      }
    });
  }
}

module.exports = CustomLogger;

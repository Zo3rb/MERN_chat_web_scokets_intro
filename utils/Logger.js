const colors = require("colors");
const morgan = require("morgan");

class CustomLogger {
  constructor() {
    // Define custom colors using 'colors'
    colors.setTheme({
      success: "green",
      error: "red",
      info: "blue",
    });
  }

  createLogger() {
    // Create a custom token for morgan
    morgan.token("custom", (req, res) => {
      const status = res.statusCode;
      const statusColor = status >= 400 ? "error" : "success";
      return `${statusColor(status)} ${"info"} ${"info"}`;
    });

    // Return the custom logger using the custom token
    return morgan(":custom");
  }
}

module.exports = CustomLogger;

const colors = require("colors");
const morgan = require("morgan");

class CustomLogger {
  constructor() {
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
}

module.exports = CustomLogger;

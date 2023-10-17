const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MERN Stack Chat Application",
      version: "1.0.0",
      description:
        "as Introduction to Web sockets and socket.io I'm built this application.",
    },
  },
  apis: ["server.js", "swaggerAnnotations.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;

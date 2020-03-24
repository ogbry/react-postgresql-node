const express = require("express");
const http = require("http");
const socketio = require("socket.io");
const cors = require("cors");
require("dotenv").config();

const database = require("./db");
const routes = require("./routes");

database.then(db => {
  const app = express();
  const server = http.createServer(app);
  const io = socketio(server);

  app.use(cors());
  app.set("db", db);
  app.use(express.json());

  app.use(routes);

  io.on("connect", socket => {
    console.log("User is disconnected");
  });

  const port = process.env.PORT || "4000";
  server.listen(port, () => console.log(`Server is listening on port ${port}`));
});

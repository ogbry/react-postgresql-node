const massive = require("massive");

const db = massive({
  host: "localhost",
  port: 5432,
  database: "faceboom_db",
  user: "postgres",
  password: "faceboom_db"
});

module.exports = db;

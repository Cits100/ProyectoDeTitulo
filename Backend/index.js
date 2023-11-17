const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

//Configuraciones
app.set("port", process.env.PORT || 8080);
app.set("json spaces", 2);

//Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const router = require("./routes/index");
app.use("/api", router);
// const { Pool } = require("pg");

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "postgres",
//   password: "shippuden98",
//   port: 5432,
// });

app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});

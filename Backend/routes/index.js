const express = require("express");
const { pool } = require("../database/database");
const {
  insertEvento,
  verEventos,
  buscarEventosFecha,
} = require("../controller/eventos.controller");
const {
  insertUsuario,
  buscarIdPorRUT,
  verUsuarios,
} = require("../controller/usuarios.controller");
const router = express.Router();

//eventos
router.get("/busqueda/eventos", buscarEventosFecha);
router.get("/busqueda/usuario/rut", buscarIdPorRUT);

router.get("/ver/eventos", verEventos);
router.get("/ver/usuarios", verUsuarios);

router.post("/registro/evento", [], insertEvento);
router.post("/registro/usuario", [], insertUsuario);
module.exports = router;

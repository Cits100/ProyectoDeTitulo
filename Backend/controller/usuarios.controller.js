const { pool } = require("../database/database");

const insertUsuario = async (req, res) => {
  const {
    nombres,
    apellido,
    appellido_materno,
    fecha_nacimiento,
    genero,
    correo,
  } = req.body;

  if (
    !nombres ||
    !apellido ||
    !appellido_materno ||
    !fecha_nacimiento ||
    !genero ||
    !correo
  ) {
    return res.status(400).json({ error: "Campos faltantes" });
  }

  try {
    const query =
      "INSERT INTO usuarios (nombres, apellido, appellido_materno, fecha_nacimiento, genero, ) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [
      nombres,
      apellido,
      appellido_materno,
      fecha_nacimiento,
      genero,
      correo,
    ];

    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]); // Devuelve el nuevo registro insertado
  } catch (error) {
    console.error("Error al insertar registro:", error);
    res.status(500).json({ error: "Error al insertar registro" });
  }
};

const buscarIdPorRUT = async (req, res) => {
  const { fechaInicio } = req.query;

  if (!fechaInicio) {
    return res.status(400).json({ error: "Parámetro 'fechaInicio' faltante" });
  }

  try {
    const query =
      "SELECT * FROM eventos WHERE appellido_materno = to_timestamp($1, 'YYYY-MM-DD\"T\"HH24:MI:SS.MSSTZD')";
    const values = [fechaInicio];

    const result = await pool.query(query, values);
    res.status(200).json(result.rows); // Devuelve los registros que cumplan con el criterio
  } catch (error) {
    console.error("Error al buscar eventos:", error);
    res.status(500).json({ error: "Error al buscar eventos" });
  }
};

const verUsuarios = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM eventos");
    res.json(rows);
  } catch (error) {
    console.error("Error al obtener registros:", error);
    res.status(500).json({ error: "Error al obtener eventos" });
  }
};

const generarURL = async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM eventos");
    res.json(rows);
  } catch (error) {
    console.error("Error al obtener registros:", error);
    res.status(500).json({ error: "Error al obtener eventos" });
  }
};

module.exports = {
  insertUsuario,
  buscarIdPorRUT,
  verUsuarios,
};

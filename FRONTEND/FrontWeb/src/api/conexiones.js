import { encryptPassword } from "../utils/encryptPass";
import axios from "axios";
let BASE_URL_API = "http://localhost:8080/api/";

const axiosConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const login = async (params) => {
  try {
    const { correo, password } = params;
    const hashedPassword = await encryptPassword(password);

    const data = {
      correo,
      password: hashedPassword,
    };

    const response = await axios.get(
      BASE_URL_API + "loginApp",
      data,
      axiosConfig
    );

    console.log(response.data);

    if (response) {
      return true;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const crearEvento = async (params) => {
  try {
    const { titulo, descripcion, fechaInicio, fechaTermino } = params;

    const data = {
      titulo,
      descripcion,
      tiempo_inicio: fechaInicio,
      tiempo_termino: fechaTermino,
    };
    const json = JSON.stringify(data);
    const response = await axios.post(
      BASE_URL_API + "registro/evento",
      json,
      axiosConfig
    );

    console.log(response);

    if (response) {
      return true;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

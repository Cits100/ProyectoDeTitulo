import React, { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { paleta } from "../themes/paleta";
import { crearEvento } from "../api/conexiones";

const FormularioEvento = () => {
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fechaInicio, setfechaInicio] = useState(null);
  const [fechaTermino, setfechaTermino] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos al servidor
    crearEvento({ titulo, descripcion, fechaInicio, fechaTermino });
  };

  const paperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
    borderRadius: "10px",
  };

  const formStyle = {
    width: "90%",
    marginTop: "2rem",
  };

  const submitButtonStyle = {
    margin: "3rem 0 1rem",
  };

  // Estilo personalizado para DatePicker
  const datePickerStyle = {
    width: "100%",
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "4px",
    marginTop: "0.5rem",
  };

  // Estilo para el Typography
  const typographyStyle = {
    fontWeight: "bold",
    color: paleta.text.primary,
    marginTop: "0.5rem",
  };

  return (
    <Container component="main" maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Grid item xs={12} sm={8} md={6}>
          <Paper elevation={3} variant="login" style={paperStyle}>
            <Typography variant="h4" component="div" color="white">
              Añadir Evento
            </Typography>
            <form style={formStyle} onSubmit={handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="titulo"
                label="Título del Evento"
                name="titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                multiline
                rows={4}
                id="descripcion"
                label="Descripción"
                name="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body1" style={typographyStyle}>
                    Fecha y Hora de inicio:
                  </Typography>
                  <DatePicker
                    required
                    selected={fechaInicio}
                    onChange={(date) => setfechaInicio(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="yyyy-MM-dd HH:mm:ss"
                    placeholderText="Seleccione "
                    customInput={
                      <TextField
                        variant="outlined"
                        style={datePickerStyle}
                        fullWidth
                      />
                    }
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body1" style={typographyStyle}>
                    Fecha y Hora de término:
                  </Typography>
                  <DatePicker
                    required
                    selected={fechaTermino}
                    onChange={(date) => setfechaTermino(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="yyyy-MM-dd HH:mm:ss"
                    placeholderText="Seleccione "
                    customInput={
                      <TextField
                        variant="outlined"
                        style={datePickerStyle}
                        fullWidth
                      />
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={submitButtonStyle}
              >
                Añadir Evento
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FormularioEvento;

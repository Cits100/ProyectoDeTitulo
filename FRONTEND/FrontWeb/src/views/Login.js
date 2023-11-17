import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
  Paper,
  Grid,
  styled,
} from "@mui/material";
import { paleta } from "../themes/paleta";

const CenteredContainer = styled(Container)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
});

const Login = ({ onLogin }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { idUser, idEvento } = useParams();

  const handleLogin = () => {
    // Implementa la lógica de inicio de sesión
    console.log("User:", user);
    console.log("Password:", password);
    if (idUser && idEvento) {
      console.logo("Logica a implementar");
    } else {
      onLogin();
    }
  };

  return (
    <CenteredContainer component="main" maxWidth="lg">
      <CssBaseline />
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <Paper variant="login">
            <Typography
              component="h1"
              variant="h4"
              style={{
                color: "#ffffff",
                WebkitTextStroke: "1px black",
                textAlign: "center",
              }}
            >
              Administración Carnet Virtual App
            </Typography>
            <form style={paleta.box.login.form}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="user"
                label="Nombre de usuario"
                name="user"
                autoComplete="user"
                autoFocus
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                style={paleta.box.login.submit}
                onClick={handleLogin}
              >
                Iniciar sesión
              </Button>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </CenteredContainer>
  );
};

export default Login;

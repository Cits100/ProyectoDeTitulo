import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { DefaultLayout } from "./views/DefaultLayout";
import { useState } from "react";
import { tema } from "./themes/tema";
import Login from "./views/Login";
import FormularioEvento from "./views/FormularioEvento";
import { Page404 } from "./views/Page404";

function App() {
  const [logeado, setLogeado] = useState(false);

  const handleLogeado = () => {
    setLogeado(true);
  };

  const handleDeslogeado = () => {
    setLogeado(false);
  };

  return (
    <ThemeProvider theme={tema}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              logeado ? (
                <Navigate to="/formularioEventos" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/login/:idUser?/:idEvento?"
            element={
              logeado ? (
                <Navigate to="/formularioEventos" />
              ) : (
                <Login onLogin={handleLogeado} />
              )
            }
          />

          <Route
            element={<DefaultLayout handleDeslogeado={handleDeslogeado} />}
          >
            <Route
              path="/formularioEventos"
              element={
                logeado ? <FormularioEvento /> : <Navigate to="/login" />
              }
            />
          </Route>

          <Route path="*" element={<Page404 />} />

          {/* Ruta para la página de inicio sin logear */}
          {/* <Route path="/login" element={<Login onLogin={handleLogeado} />} /> */}

          {/* Ruta para la página de inicio una vez logeado */}
          {/* <Route element={<DefaultLayout />}>
            <Route
              path="/dashboard"
              // element={<Dashboard Dashboard onLogout={handleDeslogeado} />}
            />
          </Route> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

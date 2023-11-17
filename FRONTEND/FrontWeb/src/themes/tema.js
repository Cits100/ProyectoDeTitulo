import { createTheme } from "@mui/material";
import { paleta } from "./paleta";

export const tema = createTheme({
  palette: paleta,
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: paleta.drawer.background,
          boxShadow: paleta.drawer.boxShadow,
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: paleta.text.primary,
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          color: "black",
        },
      },
    },
    MuiPaper: {
      //   styleOverrides: {
      //     loginTitle: {
      //       color: "#ffffff",
      //       WebkitTextStroke: "1px black",
      //       textAlign: "center",
      //     },
      //     loginPaper: {
      //       display: "flex",
      //       flexDirection: "column",
      //       alignItems: "center",
      //       background: paleta.box.login.paper.background,
      //       padding: paleta.box.login.paper.padding,
      //       borderRadius: paleta.box.login.paper.borderRadius,
      //     },
      //   },
      variants: [
        {
          props: { variant: "login" },
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            background: paleta.box.login.paper.background,
            padding: paleta.box.login.paper.padding,
            borderRadius: paleta.box.login.paper.borderRadius,
          },
        },
      ],
    },
  },
  componentsProps: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          "& .MuiSvgIcon-root": {
            color: "black",
          },
        },
      },
    },
  },
});

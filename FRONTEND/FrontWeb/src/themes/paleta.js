export const paleta = {
  mode: "light",
  primary: {
    main: "#000000",
    // dark: "#005D98",
  },
  secondary: {
    main: "#000000",
  },
  //   background: {
  //     default: "#2B92CC",
  //   },
  text: {
    primary: "#000000", // Color del texto principal
    secondary: "rgba(255, 255, 255, 0.7)", // Color del texto secundario (puedes ajustar la opacidad según sea necesario)
  },
  drawer: {
    background: "linear-gradient(to bottom, #1691CD, #015A94)",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.4)",
  },
  box: {
    login: {
      paper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "linear-gradient(to bottom, #1691CD, #015A94)",
        padding: "40px",
        borderRadius: "10px",
      },
      form: {
        width: "90%",
        marginTop: "2rem",
      },
      submit: {
        margin: "3rem 0 1rem",
      },
      link: {
        color: "#fff",
      },
    },
  },
};

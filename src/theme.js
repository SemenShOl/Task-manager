import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  shadows: ["none"],
  palette: {
    primary: {
      main: "#392759",
      dark: "#6874E8",
      contrastText: "#fff",
    },
    error: {
      main: "#b83914",
      contrastText: "#fff",
    },
    secondary: {
      main: "#E8F0FF",
    },
  },
  typography: {
    button: {
      textTransform: "none",
      fontWeight: 400,
    },
  },
});

import { createTheme } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#123154",
    },
    secondary: {
      main: "#006699",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#f5f5f5",
    },
    titleBar: {
      main: "#eeeeee",
      contrastText: "#222222",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#123154",
          "&:hover": {
            backgroundColor: "#ffffff",
            boxShadow: "none",
          },
          "&:active": {
            boxShadow: "none",
            backgroundColor: "#3c52b2",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#123154",
        },
        focused: {
          "&$focused": {
            color: "yellow",
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          //   borderBottom: "1px solid #123154",
          "&::before": {
            borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#123154",
        },
        colorPrimary: "#123154",
      },
    },
  },
})

export default theme

import { createTheme } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"

// A custom theme for this app
const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#26292C",
      light: "rgb(81, 91, 95)",
      dark: "rgb(26, 35, 39)",
      contrastText: "#d6c990",
    },
    secondary: {
      main: "#FFB74D",
      light: "rgb(255, 197, 112)",
      dark: "rgb(200, 147, 89)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    titleBar: {
      main: "#555555",
      contrastText: "#d6c990",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    allVariants: {
      color: "#d6c990",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#fff",
          background: "#d6c990",
        },
        label: {
          color: "#fff",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          "&.Mui-focused": {
            color: "red",
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: "#d6c990",
        },
        colorPrimary: "#d6c990",
      },
    },
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: "#ccc",
        },
        colorPrimary: {
          "&.Mui-checked": {
            color: "#d6c990",
          },
        },
        track: {
          backgroundColor: "#fff",
          ".Mui-checked.Mui-checked + &": {
            backgroundColor: "#fff",
          },
        },
      },
    },
  },
})

export default theme

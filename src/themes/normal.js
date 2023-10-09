import { createTheme } from "@material-ui/core/styles"
import { red } from "@material-ui/core/colors"

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffff",
    },
    secondary: {
      main: "#006699",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#ebeef0",
    },
    titleBar: {
      main: "#eeeeee",
      contrastText: "#222222",
    },
  },
  typography: {
    allVariants: {
      color: "#123154",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#123154",
          "&:hover": {
            backgroundColor: "#123154",
            color: "#fff",
          },
          "&:active": {
            boxShadow: "none",
            backgroundColor: "#3c52b2",
          },
        },
        outlined: {
          color: "#123154",
          borderColor: "#123154",
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
          "&::before": {
            borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
          },
          "&.Mui-focused": {
            borderBottom: "1px solid rgba(0, 0, 0, 0.42)",
          },
        },
        focused: {},
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
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          color: "#123154",
        },
        colorPrimary: {
          "&.Mui-checked": {
            color: "#123154",
          },
        },
        track: {
          backgroundColor: "#123154",
          ".Mui-checked.Mui-checked + &": {
            backgroundColor: "#123154",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: "#123154",
          "&.Mui-selected": {
            color: "#123154",
          },
        },
        textColorPrimary: "#123154",
      },
    },
    MuiTabs: {
      defaultProps: {
        TabIndicatorProps: { style: { backgroundColor: "#123154" } },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        determinate: {
          backgroundColor: "#ebeef0",
        },
        bar1Determinate: {
          backgroundColor: "#123154",
        },
      },
    },
  },
})

export default theme

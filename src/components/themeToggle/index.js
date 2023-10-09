import FormControlLabel from "@material-ui/core/FormControlLabel"
import { useContext } from "react"

import { CustomThemeContext } from "../../themes/CustomThemeProvider"
import { Box, Button, Switch, Typography, useTheme } from "@mui/material"

const ThemeToggle = (props) => {
  const theme = useTheme()
  const { currentTheme, setTheme } = useContext(CustomThemeContext)

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Button
          variant="outlined"
          size="small"
          onClick={() => {
            setTheme("normal")
          }}
          sx={{
            background:
              currentTheme === "normal"
                ? `${theme.palette.primary.main}`
                : "transparent",
          }}
        >
          Light Theme
        </Button>
        <Button
          variant="outlined"
          size="small"
          onClick={() => {
            setTheme("dark")
          }}
          sx={{
            background:
              currentTheme === "dark" ? `${theme.palette.primary.main}` : "",
            marginLeft: "3%",
          }}
        >
          Dark Theme
        </Button>
      </Box>
    </Box>
  )
}

export default ThemeToggle

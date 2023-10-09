import React, { useContext, useEffect, useState } from "react"
import { Box, Container, Grid } from "@mui/material"
import OpenNavBar from "../../components/NavBar/OpenNavBar"
import LoginForm from "../../components/LoginForm"
import { CustomThemeContext } from "../../themes/CustomThemeProvider"
import { ThemeContext } from "@emotion/react"
import Button from "@mui/material/Button"

const Login = (props) => {
  const { currentTheme, setTheme } = useContext(CustomThemeContext)

  useEffect(() => {
    setTheme("global")
  }, [])
  return (
    <React.Fragment>
      <OpenNavBar />
      <Box
        sx={{
          mt: 3,
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={8}
            sx={{
              backgroundImage: `url(${"/images/yati-login-background.jpeg"})`,
              display: {
                xs: "none",
                md: "block",
              },
              backgroundRepeat: "no-repeat",
              backgroundSize: 1350,
              height: 550,
            }}
          >
            <Container>
              <Box sx={{ color: "#fff" }}>
                laskjdklasjdklasjdklasjd alksjdlk asjdlkajsdlkdajkajsldka
                sedasdj as kdj asjdlkajsdlkdajkajsldkaskdjaskd
                asjdlkajsdlkdajkajsldkaaas
              </Box>
            </Container>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              height: 550,
            }}
          >
            <LoginForm />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  )
}

Login.title = "Login"
Login.authentication = false

export default Login

import React, { useContext, useState } from "react"
import {
  Box,
  Container,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material"
import AuthContext from "../../context/AuthContext"
// import { AccountCircle } from "@material-ui/icons"
import { AccountCircle, Delete } from "@mui/icons-material"
import CustomButton from "../CustomCore/Button"
import { Link } from "@mui/material"

const LoginForm = () => {
  const { loginUser } = useContext(AuthContext)
  const [username, setUserName] = useState(null)
  const [password, setPassword] = useState(null)

  const onClickOfLogin = () => {
    loginUser(username, password)
  }

  return (
    <React.Fragment>
      {" "}
      <Container
        sx={{
          mt: 5,
        }}
      >
        <Box>
          <Typography>Welcome! Login to Yati</Typography>
        </Box>
      </Container>
      <Container
        sx={{
          mt: 5,
        }}
      >
        <Grid item xs={12}>
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="input-with-icon-username">
              User Name / User Email
            </InputLabel>
            <Input
              id="input-with-icon-username"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
              onChange={(e) => {
                setUserName(e.target.value)
              }}
              required
            />
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            mt: 3,
          }}
        >
          <FormControl variant="standard" fullWidth>
            <InputLabel htmlFor="input-with-icon-password">Password</InputLabel>
            <Input
              id="input-with-icon-password"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
              type="password"
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              required
            />
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <Box>
            <CustomButton
              title={"Login"}
              onClick={() => {
                onClickOfLogin()
              }}
            />
          </Box>
          <Box>
            <Link
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
              flexGrow={1}
            >
              <Typography>Register with us</Typography>
            </Link>
          </Box>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default LoginForm

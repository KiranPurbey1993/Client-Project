import { useContext, useState, useEffect } from "react"
import { useRouter } from "next/router"

import AuthContext, { AuthProvider } from "../context/AuthContext"

import "bootstrap/dist/css/bootstrap.min.css"
import CustomThemeProvider from "../themes/CustomThemeProvider"
import * as React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import MuiAppBar from "@mui/material/AppBar"
import NavBar from "../components/NavBar"
import Head from "next/head"
import PageContainer from "../components/PageContainer"
import ResponsiveAppBar from "../components/NavBar/PrivateNavBar"
import { GlobalStyles, useTheme } from "@mui/material"

const drawerWidth = 240

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
)

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}))

const AuthComponent = ({ Component, pageProps }) => {
  const theme = useTheme()
  const router = useRouter()
  const { user, authTokens } = useContext(AuthContext)
  const [open, setOpen] = useState(true)

  useEffect(() => {
    if (Component.authentication && !user?.user_id) {
      router.push("/login")
    } else if (!Component.authentication && user?.user_id) {
      router.push("/dashboard")
    }
  }, [])

  return (
    <>
      {user?.user_id && Component.authentication ? (
        <Box>
          <GlobalStyles
            styles={{
              body: { backgroundColor: theme.palette.background.default },
            }}
          />
          <ResponsiveAppBar />
          <Main open={open}>
            <PageContainer Component={Component}>
              <Component {...pageProps} />
            </PageContainer>
          </Main>
        </Box>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  )
}

const MyApp = ({ Component, pageProps }) => {
  return (
    <CustomThemeProvider>
      <AuthProvider>
        <Head>
          <title>
            {Component?.title ? `Yati - ${Component?.title}` : "Yati"}
          </title>
          <link
            rel="icon"
            type="image/x-icon"
            href="/images/logo-LightTheme.png"
          ></link>
        </Head>
        <AuthComponent Component={Component} pageProps={pageProps} />
      </AuthProvider>
    </CustomThemeProvider>
  )
}

export default MyApp

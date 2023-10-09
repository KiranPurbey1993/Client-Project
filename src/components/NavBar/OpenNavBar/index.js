import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import AdbIcon from "@mui/icons-material/Adb"
import { Link } from "@mui/material"

const pages = ["About Us", "Home", "Blog"]
const settings = ["Profile", "Account", "Dashboard", "Logout"]
const Logo = "images/Yati_logo.jpeg"

function OpenNavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <React.Fragment>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          background: "#123154",
          color: "#ffffff",
          padding: 1,
        }}
      >
        <Box>Call Us : +91 00000000000</Box>
        <Box>Help</Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ mr: 1 }}>A+</Box>
          <Box sx={{ mr: 1 }}>English</Box>
          <Box>Hindi</Box>
        </Box>
      </Box>

      <AppBar
        position="static"
        sx={{
          background: "#ffffff",
          color: "#123154",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
              flexGrow={1}
            >
              <Box component="img" sx={{ height: 54 }} alt="Logo" src={Logo} />
            </Link>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Link
              href="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
              }}
              flexGrow={1}
            >
              <Box component="img" sx={{ height: 54 }} alt="Logo" src={Logo} />
            </Link>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "#123154", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  )
}
export default OpenNavBar

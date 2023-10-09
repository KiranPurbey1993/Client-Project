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
import MailIcon from "@mui/icons-material/Mail"
import NotificationsIcon from "@mui/icons-material/Notifications"
import ThemeToggle from "../../themeToggle"
import { Badge, Divider, Link } from "@mui/material"
import { CustomThemeContext } from "../../../themes/CustomThemeProvider"

const pages = ["Enquriy", "Dasboard"]
const settings = ["Profile", "Account", "Dashboard", "Logout"]
const Logo = "images/logo-DarkTheme.png"
const LightLogo = "images/logo-LightTheme.png"

function ResponsiveAppBar() {
  const { currentTheme, setTheme } = React.useContext(CustomThemeContext)

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
    <AppBar position="static">
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
            <Box
              component="img"
              sx={{ height: 54 }}
              alt="Logo"
              src={currentTheme === "normal" ? LightLogo : Logo}
            />
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
            <Box
              component="img"
              sx={{ height: 54 }}
              alt="Logo"
              src={currentTheme === "normal" ? LightLogo : Logo}
            />
          </Link>
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "none", md: "flex" },
              marginRight: "2%",
            }}
          >
            {pages.map((page) => (
              <Typography sx={{ marginRight: "10%" }}>{page}</Typography>
            ))}
          </Box>
          <MenuItem sx={{ padding: 0 }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
          </MenuItem>
          <MenuItem sx={{ padding: 0, marginRight: "1%" }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </MenuItem>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              //   transformOrigin={{
              //     vertical: "top",
              //     horizontal: "right",
              //   }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
              <Divider />
              <MenuItem>
                <ThemeToggle />
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar

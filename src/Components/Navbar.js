import * as React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
  Modal,
  TextField,
  FormControl,
  Avatar,
  Stack,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExtensionIcon from "@mui/icons-material/Extension";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";

const pages = ["Rules", "Play", "Disclaimers", "Contact"];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState("login");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenModal = (mode) => {
    setModalType(mode);
    setOpen(true);
    setAnchorElNav(null);
  };

  const handleCloseModal = () => setOpen(false);

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleModalToggle = () => {
    // Toggle the modalType between "login" and "register"
    setModalType(modalType === "login" ? "register" : "login");
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", boxShadow: "none" }}
    >
      <Container maxWidth="xl" className="navbar-container">
        <Toolbar disableGutters>
          {/* Extension Icon */}
          <ExtensionIcon
            sx={{
              display: {
                xs: "none",
                md: "flex",
                fontSize: "40px",
                color: "#ea5d2d",
              },
              mr: 1,
              ml: 5,
            }}
          />
          {/* Logo Link */}
          <Link to="/pzzle">
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              className="logo-text"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "black",
                textDecoration: "none",
              }}
            >
              Pzzle
            </Typography>
          </Link>
          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
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
              <MenuItem onClick={handleCloseNavMenu}>
                  <Link to="/pzzle">Home</Link>
                </MenuItem>
              {pages.map((page) => (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link to={`/${page.toLocaleLowerCase()}`}>{page}</Link>
                </MenuItem>
              ))}
              <MenuItem onClick={() => handleOpenModal("login")}>
                <Typography textAlign="center">Login</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleOpenModal("register")}>
                <Typography textAlign="center">Register</Typography>
              </MenuItem>
            </Menu>
          </Box>
          {/* Desktop Menu */}
          <Link to="/pzzle">
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            <ExtensionIcon
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                  fontSize: "40px",
                  color: "#ea5d2d",
                },
                mr: 1,
              }}
            />
            Pzzle
          </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link to={`/${page.toLocaleLowerCase()}`} key={page}>
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 7,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 500,
                    color: "black",
                    textDecoration: "none",
                  }}
                >
                  {page}
                </Typography>
              </Link>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {/* Login and Register Buttons */}
            <MenuItem>
              <Button
                variant="outlined"
                className="login-button"
                onClick={() => handleOpenModal("login")}
                sx={{ borderColor: "#ea5d2d", color: "#ea5d2d" }}
              >
                Login
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                variant="contained"
                className="register-button"
                disableElevation
                onClick={() => handleOpenModal("register")}
                sx={{ backgroundColor: "#ea5d2d", color: "white" }}
              >
                Register
              </Button>
            </MenuItem>
          </Box>
        </Toolbar>
      </Container>
      {/* Modal for Login/Register */}
      <Modal open={open} onClose={handleCloseModal}>
        <Box sx={style}>
          <Typography id="modal-title" variant="h4" component="h2">
            {modalType === "login" ? "Login" : "Register"}
          </Typography>
          <FormControl>
            <TextField
              required
              id="email"
              label="Email"
              variant="outlined"
              margin="normal"
            ></TextField>
            <TextField
              required
              id="password"
              label="Password"
              variant="outlined"
              margin="normal"
              type="password"
            ></TextField>
            <Button
              variant="contained"
              disableElevation
              sx={{
                backgroundColor: "#ea5d2d",
                marginTop: "15px",
                borderRadius: "50px",
              }}
            >
              {modalType === "login" ? "Login" : "Register"}
            </Button>
            <Typography
              id="modal-modal-description"
              variant="subtitle2"
              sx={{ my: 3 }}
            >
              or use a social network
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              {/* Social Network Icons */}
              <Avatar sx={{ backgroundColor: "#26a7de" }}>
                <TwitterIcon />
              </Avatar>
              <Avatar sx={{ backgroundColor: "#DB4437" }}>
                <GoogleIcon />
              </Avatar>
              <Avatar sx={{ backgroundColor: "#3b5998" }}>
                <FacebookIcon />
              </Avatar>
            </Stack>
            <Divider sx={{ my: 3 }} />
            <Typography
              id="modal-modal-description"
              variant="subtitle1"
              sx={{}}
            >
              {modalType === "login"
                ? "Not a member yet? "
                : "Already a member? "}
              <a href="#" className="orange-link" onClick={handleModalToggle}>
                {modalType === "login" ? "Register" : "Login"}
              </a>
            </Typography>
          </FormControl>
        </Box>
      </Modal>
    </AppBar>
  );
}

export default Navbar;
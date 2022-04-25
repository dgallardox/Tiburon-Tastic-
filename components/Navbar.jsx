import Link from 'next/link';
import * as React from 'react';
import useAuth from "../hooks/useAuth";
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';

export default function Nav(props) {
  const { loggedIn } = useAuth();

  const loggedOutPages = [
    ['home', '/'],
    ['login', '/log-in'],
    ['sign up', '/sign-up']
  ]
  const loggedInPages = [
    ['home', '/'],
    ['logout', '/log-out']
  ]

  const accountSettings = [
    ['Account', '/account'],
    ['Dashboard', '/dashboard'],
    ['Logout', '/logout']
  ]

  const loggedOutSettings = [
    ['Login', '/log-in'],
    ['Sign up', '/sign-up']
  ]

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
  <>
    {!loggedIn ? (
        <>
        <AppBar position="static" enableColorOnDark>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex'} }}
          >
            Tiburontastic
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
                  >
                    

              {loggedOutPages.map((page, i) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu} to="/">
                  <Typography textAlign="center">
                      {page[0]}
                  </Typography>
                  </MenuItem>

              ))}

            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Tiburontastic
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            {loggedOutPages.map((page, i) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                  {page[0]}
              </Button>
            ))}

          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/static/images/avatar/2.jpg">DG</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

              {loggedOutSettings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} href={setting[1]}>
                  <Typography textAlign="center">
                      {setting[0]}
                  </Typography>
                </MenuItem>
              ))}

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
        </>
        //////////////////////////////////////
      ) : (
        //////////////////////////////////////
          <>
                <AppBar position="static" enableColorOnDark>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex'} }}
          >
            Tiburontastic
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {loggedInPages.map((page, i) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} to="/">
                  <Typography textAlign="center">
                    <a href={page[1]}>
                      {page[0]}
                    </a>
                  </Typography>
                </MenuItem>
              ))}

            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Tiburontastic
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            {loggedInPages.map((page, i) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <a href={page[1]}>
                  {page[0]}
                </a>
              </Button>
            ))}

          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/static/images/avatar/2.jpg">DG</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

              {accountSettings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu} href={setting[1]}>
                  <Typography textAlign="center">
                    <a href={setting[1]}>
                      {setting[0]}
                    </a>
                  </Typography>
                </MenuItem>
              ))}

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
      </>           
      )}
      </>

    // <nav className="navbar navbar-expand-sm navbar-light bg-light">
    //   <div className="container-fluid">
    //     <Link href="/">
    //       <a className="navbar-brand">Tiburontastic!</a>
    //     </Link>
    //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
    //       <div className="navbar-nav">
    //         {!loggedIn ? (
    //         <>
    //         <Link href="/"><a  className={navLink}>Home</a></Link>
    //         <Link href="/blog"><a  className={navLink}>Blog</a></Link>
    //         <Link href="/submit"><a  className={navLink}>Submit</a></Link>
    //         <Link href="/log-in"><a  className={navLink}>Login</a></Link>
    //         <Link href="/sign-up"><a  className={navLink}>Sign-up</a></Link>
    //         </>
    //         ) : (
    //         <>
    //         <Link href="/"><a className={navLink}>Home</a></Link>
    //         <Link href="/blog"><a className={navLink}>Blog</a></Link>
    //         <Link href="/submit"><a className={navLink}>Submit</a></Link>
    //         <Link href="/log-out"><a className={navLink}>Logout</a></Link>
    //         <Link href="/members"><a className={navLink}>Members</a></Link>
    //         </>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  )
  }
import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import BucketIcon from '../images/Bucket.svg';
import { Link } from 'react-router-dom';
import RegisterButton from './buttons/Registerbutton';
import Signinbutton from './buttons/Signinbutton';
import Adminbutton from './buttons/Adminbutton';
import Logoutbutton from './buttons/Logoutbutton';
import Postproductbutton from './buttons/Postproductbutton';
import Avatarbutton from './buttons/Avatarbutton';
import theme from '../theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    flexWrap: 'nowrap',
  },
  Button: {
    width: '200px',
  },
}));

function Navbar({
  signin = false,
  register = false,
  disablePost = false,
  post = true,
  admin = false,
  logout = false,
  loggedin = false,
}) {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar position="static">
          <Toolbar>
            <Link to="/">
              <IconButton
                edge="start"
                className={classes.MuiButton}
                color="primary"
                aria-label="menu"
              >
                <img src={BucketIcon} alt="bucket icon" />
              </IconButton>
            </Link>

            <Box
              display="flex"
              flexGrow={1}
              justifyContent="flex-end"
              m={1}
              p={1}
            >
              {post && <Postproductbutton disablePost={disablePost} />}
              {admin && <Adminbutton />}
              {!loggedin && register && <RegisterButton />}
              {!loggedin && signin && <Signinbutton />}
              {logout && <Logoutbutton />}
              {loggedin && <Avatarbutton />}
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </>
  );
}

export default Navbar;

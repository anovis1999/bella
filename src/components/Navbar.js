import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#a80505',
      },
      secondary: {
        main: '#a80505',
      },
    },
  });

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <Link to="/" className="FormField__Link_Nav">
          <Button color="inherit" >חיפוש תקלה קיימת</Button>
          </Link>
          <Link to="/" className="FormField__Link_Nav">
          <Button color="inherit" >התקלות שלי</Button>
          </Link>
          
        </Toolbar>
      </AppBar>
    </div>
    </ThemeProvider>

  );
}


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';


import Dialog from "../Body/Dialog";

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    opacity:"%50"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  
  
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  

 
 

  return (
      <div>
          
    <div className={classes.root}>

      <AppBar style={{ background: 'transparent', boxShadow: 'none'}} position="static">
        <Toolbar>
        <IconButton  edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <HomeIcon />
          </IconButton>
        <Button color="inherit">Login</Button>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
         
          
        </Toolbar>
      </AppBar>
    </div>


    </div>
  );
}

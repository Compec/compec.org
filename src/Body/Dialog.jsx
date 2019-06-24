import React,{Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import {DialogContent,Container} from "@material-ui/core";

import Send from "./Send";
import News from "./News"
import { thisExpression } from '@babel/types';
import { typography } from '@material-ui/system';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    // setOpen(false);
  props.set(false);
  
  }

 var components = {
    Send: News,
    Toolbar: Toolbar
};

  const TagName=components[props.component];

  
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        full-screen dialog
      </Button>
      <Dialog fullScreen open={props.open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              HACK.BOĞAZİÇİ
            </Typography>
            <Button color="inherit" onClick={handleClose}>
              Siteye Git
            </Button>
          </Toolbar>
        </AppBar>

        {/* More info:  https://material-ui.com/components/dialogs/  Scrolling long content */}
        <DialogContent dividers={true}>
        {/* variable to change event */}
        

       <Container>
    <h1>EVENT COMPONENT WILL BE ADDED</h1>
{/* Enable it to use different components */}
        <TagName/>


        </Container>   
        </DialogContent>
      </Dialog>
    </div>
  );
}

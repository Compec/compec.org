import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="white">
      {'Built with love by the '}
      <Link color="inherit" href="https://dev.compec.org/">
        {"R&D Team"} 
      </Link>
      {}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'blue',
    color:"white"
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div >
      {/* <CssBaseline /> */}
      {/* <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          Sticky footer
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
      </Container> */}
      <footer className={classes.footer}>
        <Container   maxWidth="sm">
          {/* <Typography variant="body1">My sticky footer can be found here.</Typography> */}
          <MadeWithLove />
        </Container>
      </footer>
    </div>
  );
}
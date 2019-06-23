import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      // backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      // backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));




  class CardUiWrapper extends React.Component{

    constructor(props){
      super(props);
      this.state={
        hidden:true,

      }
    }

    show() {
      this.setState({
          hidden: !this.state.hidden
      });

  }
    
    render(){
     var classes=this.props.classes;
      return(
        <div>

        {/* // <Card  className={classes.card}  style={{backgroundColor:"transparent"}}  > */}
        <CardMedia style={{borderRadius: "40%"}}
          className={classes.cardMedia}
          image="https://source.unsplash.com/random"
          title="Image title"
        />
          <CardContent  className={classes.cardContent} >
            <Typography gutterBottom variant="h5" component="h5">
              Heading
            </Typography>
            <div hidden={this.state.hidden}>
            <Typography>
              This is a  media card. You can use this section to describe the content.
            </Typography>
            </div>

            <Button onClick={this.show.bind(this)} size="small" color="primary">
            View
          </Button>
          <Button size="small" color="primary">
            Edit
          </Button>
          </CardContent>
         
        {/* <CardActions>
          
        </CardActions> */}
      {/* // </Card> */}
      </div>
      );


    }


  }


function Ui() {
    const classes = useStyles();
    
const cards = [1, 2, 3,  7, 8, 9];
  return (
    <Container className={classes.cardGrid} maxWidth="md">
    {/* End hero unit */}
    <Grid container spacing={4}>
      {cards.map(card => (
        <Grid item key={card} xs={6} sm={4} md={3} lg={2}>
          {/* <Card  className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image="https://source.unsplash.com/random"
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Heading
              </Typography>
              <Typography>
                This is a media card. You can use this section to describe the content.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                View
              </Button>
              <Button size="small" color="primary">
                Edit
              </Button>
            </CardActions>
          </Card> */}

          <CardUiWrapper classes={classes}/>
        </Grid>
      ))}
    </Grid>
  </Container>
  );
}


export default Ui;
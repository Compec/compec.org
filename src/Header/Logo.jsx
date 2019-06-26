import React from "react";
import { Grid, Paper, Container, Box, Typography } from "@material-ui/core"
import logo from '../Assets/croppedwhite.png';
import AppBar from "./AppBar"

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    button: {
        margin: theme.spacing(1),
        background: "transparent",
    },
    input: {
        display: 'none',
    },
});


export default withStyles(styles)(
    class Logo extends React.Component {

        isMobileDevice() {
            return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);

        };
        render() {
            const { classes } = this.props;
            return (

                <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509479863104-b1406d233998?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')" }}>   
    <Container>
                <Grid container justify="space-between"
                    alignItems=""    >

                
                    {/* {[0].map(value => ( */}
                    <Grid item xs={12} sm={3}  >
                        {/* <Image/> */}

                        <img src={logo} onClick={() => this.props.setPage("Home")} style={{ width: "100% ", height: "100%",maxWidth: "100% ", maxHeight: "100%" }} alt="" />
                    </Grid>
                    {/* ))} */}


                    {/* <Grid justify="flex-start" item xs={12} sm={3}  >
                    <    Typography variant="h5" style={{ color: "white" }} ></Typography>

                </Grid> */}
                    {/* <div hidden={this.isMobileDevice()}> */}


                        <Grid item sm={1} ></Grid>
                        <Grid hidden={this.isMobileDevice()} item xs={12} sm={5}>
                            <Grid justify="space-between"
                                alignItems="center" container >
                                {this.props.pages.map(value => (
                                    <Grid item xs={4} sm={4} md={2} >
                                        <Button onClick={() => this.props.setPage(value)} variant="contained" color="primary" className={classes.button}>
                                            {value}
                                        </Button>
                                    </Grid>
                                ))}

                            </Grid>
                        </Grid>
                    {/* </div> */}
                </Grid>
                </Container>
                </div>
            );

        }
    }
);
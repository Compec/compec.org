import React from 'react';

import { Container, Grid, Paper, Typography, Button } from '@material-ui/core';

import logo from '../Assets/compec.png';
import arrow from '../Assets/tenor.gif';
import "./Motto.css";

class Motto extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    render() {
        return (
            <div id="bg" >
            <Container >
                
                    <Grid style={{ height:"85vh"}} container spacing={3} direction="column" justify="space-evenly" >

                        <Grid item container  direction="row" justify="space-around" alignItems="center">
                            {/* <Grid style={{
                                padding: 40
                            }} item xs={6} sm={3}>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                            </Grid> */}
                        
                        </Grid>
                        <Grid   item container direction="row" justify="space-around" alignItems="center">
                            <Grid item xs={12} sm={6} container direction="column">
                                <Grid item xs={12} >

                                    <h1 id="compecrocks" style={{ width: "100% ", height: "100%", maxWidth: "100% ", maxHeight: "100%"  }} >
                                        #CompecRocks!
                                    </h1>

                                </Grid>
                                <Grid id="info" item xs={12}>
                                    <h4>Etkinlikler, eğitimler ve hackathonlarla 1994'ten beri Boğaziçi Üniversitesinde teknolojiye öncülük ediyoruz.</h4>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={4} >
                                {/* <img src={logo} alt="" style={{ 
 width: "100% ", height: "100%", maxWidth: "100% ", maxHeight: "100%" }} /> */}
 <Button variant="contained" color="primary"  href="javascript:void(Tawk_API.toggle())">CHAT WITH US</Button>
                            </Grid>

                        </Grid>

                        <Grid item container direction="row" justify="space-between" alignItems="center">

                            <Grid item xs={11} sm={8} >

                            </Grid>
                            <Grid item xs={1} sm={1} >
                                <img src={arrow} alt="" style={{ position:"relative",width: "100% ", height: "100%", maxWidth: "100% ", maxHeight: "100%" }} />
                            </Grid>



                        </Grid>

                    </Grid>








               

            </Container>
            </div>

        );

    }

}

export default Motto;

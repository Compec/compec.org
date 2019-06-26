import React from 'react';

import { Container, Grid, Paper, Typography } from '@material-ui/core';

import logo from '../Assets/compec.png';
import arrow from '../Assets/tenor.gif';


class Motto extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }
    render() {
        return (
            <Container >
                <div  >
                    <Grid container spacing={3} direction="column" >

                        <Grid item container spacing={3} direction="row" justify="space-around" alignItems="flex-start">
                            <Grid style={{
                                padding: 40
                            }} item xs={6} sm={3}>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                            </Grid>
                        </Grid>
                        <Grid item container direction="row" justify="space-between" alignItems="center">
                            <Grid item xs={12} sm={6} container direction="column">
                                <Grid item xs={12} >

                                    <h1 style={{ width: "100% ", height: "100%", maxWidth: "100% ", maxHeight: "100%", fontSize: "auto" }} >
                                        #CompecRocks!
                                    </h1>

                                </Grid>
                                <Grid item xs={12}>
                                    <h4>Etkinlikler, eğitimler ve hackathonlarla 1994'ten beri Boğaziçi Üniversitesinde teknolojiye öncülük ediyoruz.</h4>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={4} >
                                <img src={logo} alt="" style={{ width: "100% ", height: "100%", maxWidth: "100% ", maxHeight: "100%" }} />
                            </Grid>

                        </Grid>

                        <Grid item container direction="row" justify="space-between" alignItems="center">

                            <Grid item xs={11} sm={8} style={{
                                padding: 40
                            }}>

                            </Grid>
                            <Grid item xs={1} sm={1} style={{

                            }}>
                                <img src={arrow} alt="" style={{ width: "100% ", height: "100%", maxWidth: "100% ", maxHeight: "100%" }} />
                            </Grid>



                        </Grid>

                    </Grid>








                </div>


            </Container>
        );

    }

}

export default Motto;

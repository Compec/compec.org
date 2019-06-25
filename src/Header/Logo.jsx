import React from "react";
import { Grid, Paper, Container, Box, Typography } from "@material-ui/core"
import logo from '../Assets/croppedwhite.png';
import AppBar from "./AppBar"

class Logo extends React.Component {

    isMobileDevice() {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);

    };
    render() {
        return (
           
            <Grid container justify="flex-start"
                alignItems="" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1509479863104-b1406d233998?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')" }}   >

                <Grid item sm={1} ></Grid>
                {/* {[0].map(value => ( */}
                <Grid item xs={12} sm={3}  >
                    {/* <Image/> */}

                    <img src={logo} onClick={()=>this.props.setPage("Home")} style={{ width: "100% ", height: "auto" }} alt="" />
                </Grid>
                {/* ))} */}


                {/* <Grid justify="flex-start" item xs={12} sm={3}  >
                    <    Typography variant="h5" style={{ color: "white" }} ></Typography>

                </Grid> */}

                <Grid hidden={
                    this.isMobileDevice()
                    } alignItems="flex-start" item xs={12} sm={6}>
                    <div style={{ backgroundColor: "transparent" }}>

                        <AppBar />
                        
                    </div>

                </Grid>
            </Grid>
         
        );

    }
}

export default Logo;
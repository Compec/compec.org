import React from "react";
import {Grid,Paper, Container, Box,Typography} from "@material-ui/core"
import logo from '../Assets/beyaz1.png';

class Logo extends React.Component {




    render() {
        return (
            // <Box>
            <Grid  container justify="flex-start"
  alignItems="center" style={{backgroundImage:"url('https://images.unsplash.com/photo-1509479863104-b1406d233998?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')"}}   >
                
                    <Grid item sm={1} ></Grid>
                        {/* {[0].map(value => ( */}
                            <Grid  item xs={12} sm={3}  >
                                {/* <Image/> */}

                              <img src={logo} style={{width: "100% ", height: "auto"}}  alt=""/>
                               </Grid>
                        {/* ))} */}
                       
                        
                        <Grid justify="flex-start"  item xs={12} sm={3}  >
                    <    Typography variant="h5" style={{color:"white"}} >Boğaziçi Üniversitesinde 1994'ten Beri Teknolojiye Öncülük Ediyoruz.</Typography> 
                               </Grid>
                             
                              

                   


            </Grid>
        // </Box>
        );

    }
}

export default Logo;
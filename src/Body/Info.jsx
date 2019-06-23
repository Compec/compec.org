import React from "react";
import {Grid,Paper, Container, Box,Typography} from "@material-ui/core"

class Logo extends React.Component {




    render() {
        return (
            // <Box>
            <Grid  container justify="flex-start"

  alignItems="center" style={{backgroundImage:"url('../Assets/lionello-delpiccolo-151750-unsplash.jpg')"}}   >
                {/* https://images.unsplash.com/photo-1510070009289-b5bc34383727 */}


                    <Grid item sm={1} ></Grid>
                        {/* {[0].map(value => ( */}
                            <Grid  item xs={12} sm={3}  >
                                {/* <Image/> */}

                              <img src={logo} style={{width: "100% ", height: "auto"}}  alt=""/>
                               </Grid>
                        {/* ))} */}
                       
                          saasd
                          
                        <Grid justify="flex-start"  item xs={12} sm={3}  >
                    <    Typography variant="h5" >Boğaziçi dsÜniversiddtesindddd dsadde 1994'ten Beri Teknolojiye Öncülük Ediyoruz.</Typography> 
                               </Grid>
                            

                              



                   


            </Grid>
        // </Box>
        );

    }
}

export default Logo;
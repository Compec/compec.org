import React from "react";
import Logo from "../Header/Logo";
import About from "../Header/About";
import {Container} from "@material-ui/core";
import News from "../Body/News";


class Home extends React.Component{
    
    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <div>
               
                <About/>
                <Container>
                    <News/>
                </Container>
            </div>

            );
    }
        
        
  


}


export default Home;
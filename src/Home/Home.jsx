import React from "react";
import Logo from "../Header/Logo";
import About from "../Header/About";
import {Container} from "@material-ui/core";
import News from "../Body/News";
import Motto from "./Motto";
import Event from "./MainPageEvent";

class Home extends React.Component{
    
    constructor(props){
        super(props);
        
    }

    render(){
        return(
            <div>
                <Motto/>
                <About/>
                <Event/>
            </div>

            );
    }
        
        
  


}


export default Home;
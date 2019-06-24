import React from 'react';
import logo from './Assets/beyaz1.png';
import './App.css';
import About from "./Header/About";
import Event from "./Body/Event";
import Ui from "./Body/Ui.jsx";
import Test from "./Footer/footer";

import Send from "./Body/Send";

import NewsGallery from "./Body/NewsGallery";

import News from "./Body/News"

// import Member from "./Body/Member";

import Logo from "./Header/Logo";

import Dialog from "./Body/Dialog";

import AppBar from "./Header/AppBar"

import {Container} from "@material-ui/core";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      openMenu:false,


    };
  }


  setDialogComponent(){

  }

  setDialog(v){
    this.setState({openMenu:v,});
    
  }

  render(){
  return (
    <div className="App">
        <AppBar type={this.setDialogComponent.bind(this)} set={this.setDialog.bind(this)}/>
      <header className="App-header">
  
        <Logo/> 

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
         <About/> 

<Container>

         <News/>
         </Container>

<iframe src="https://calendar.google.com/calendar/embed?title=Put%20your%20Title%20here&amp;showCalendars=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=8d3fc8l9g04n7r9im45fsn08ak%40group.calendar.google.com&amp;color=%238D6F47&amp;ctz=America%2FNew_York"  width="auto" height="400" frameborder="0" scrolling="no"></iframe>
      


         <Dialog set={this.setDialog.bind(this)} open={this.state.openMenu} component="Send" />



        {/* <Send/> */}
        
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
     {/* <NewsGallery/> */}
        {/* <Event resp="DevTeam" name="MY EVENT"/> */}
        
      
        <Ui/>
      <Test/>
      </header>
      
      
    </div>
  );}
}

export default App;

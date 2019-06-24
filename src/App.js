import React from 'react';
import logo from './Assets/beyaz1.png';
import './App.css';
import About from "./Header/About";
import Event from "./Body/Event";
import BotNav from "./Footer/BotNav";
import Dialog from "./Body/Dialog";
import AppBar from "./Header/AppBar";
import Home from "./Home/Home";

import Footer from "./Footer/footer";

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
      {/* <AppBar type={this.setDialogComponent.bind(this)} set={this.setDialog.bind(this)}/> */}
      <Home/> 
      <Footer/>
      <BotNav/>

    </div>
    
    

    
  );}
}

export default App;

import React from 'react';
import logo from './Assets/beyaz1.png';
import './App.css';
import About from "./Header/About";
import Event from "./Body/Event";
import BotNav from "./Footer/BotNav";
import Dialog from "./Body/Dialog";
import AppBar from "./Header/AppBar";
import Home from "./Home/Home";
import Logo from "./Header/Logo"
import News from "./Body/News";
import Footer from "./Footer/footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,

      currentPage: "Home",
      pages:["Home", "About", "Career", "Events", "Team", "Contact"],

    };
  }

  currentPageSelect() {
    switch (this.state.currentPage) {
      case "Home":
        return <Home />;
      case "News":
        return <News/>;
      case "About":
        return <About/>;

    }


  }
  setCurrentPage(page) {
    this.setState({ currentPage: page });
  }

  render() {
    return (

      <div className="App">
        {/* <AppBar type={this.setDialogComponent.bind(this)} set={this.setDialog.bind(this)}/> */}
        <Logo pages={this.pages} setPage={this.setCurrentPage.bind(this)} />
        <BotNav pages={this.pages} setPage={this.setCurrentPage.bind(this)} />

        {this.currentPageSelect()}

        <Footer />

      </div>




    );
  }
}

export default App;

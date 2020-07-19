import React, {Component} from 'react';
import NavBar from './components/NavBar/Navbar';
import Routes from './Routes';

import AppContext from "./AppContext"
import { logout } from "./services/authService";

import Header from './components/Header/Header';
import { Paragraph1, Paragraph2, Paragraph3, Paragraph4, ParagraphTop } from './components/Paragraph/Paragraph';


//clase para poder usar estados

class App extends Component {
 
  state = { user: {} }
  setUser = (user)=> this.setState( { user } )
  
  logout = () => {
    logout().then(() => {
      localStorage.removeItem("user");
      this.setState({ user: {} });
    });
  };

  render () {
  const { state, setUser, logout} = this

    return (
      <AppContext.Provider value={  {state, setUser, logout} }>

            <div>
              <NavBar/>
              <Routes/>
             
             
              

              
            </div>

      </AppContext.Provider>
  );
}}

export default App


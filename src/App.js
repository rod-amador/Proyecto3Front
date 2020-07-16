import React, {Component} from 'react';
import NavBar from './components/NavBar/Navbar';
import Routes from './Routes';

import AppContext from "./AppContext"

//clase para poder usar estados

class App extends Component {
  state = { user: {} }

  //actualizar al usuario
  //exportaremos el state y la función que lo actualiza
  setUser = (user)=> this.setState( { user } )



  render () {
   
  const { state, setUser} = this

    return (

      <AppContext.Provider value={  {state, setUser} }>

        <div>
          <NavBar/>
          <Routes/>
        </div>

      </AppContext.Provider>
  );
}}

export default App


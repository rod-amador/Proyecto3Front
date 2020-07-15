import React, {Component} from 'react';
import NavBar from './components/NavBar/Navbar';
import Routes from './Routes';

class App extends Component {
  
  render(){
  

    return (
        <div>
          <NavBar/>
          <Routes/>
        </div>
  );
}}



export default App
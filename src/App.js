import React from 'react';

import NavBar from './components/NavBar/Navbar';
import Routes from './Routes';
import Content from './components/Content';



function App() {
  return (
    <div>
   
      <NavBar/>
      <Routes/>
     
      {/* <AllHeader/>

       <TitleText 
          title= "APRENDE A INVERTIR "
          text = "Aprende cómo piensan los ricos, aprende a invertir, aprende a aumentar tus ingresos y obtener libertad financiera">
       </TitleText> */}

    </div>
  );
}

export default App;

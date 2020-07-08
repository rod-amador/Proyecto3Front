
import React from "react";
import { Switch, Route } from "react-router-dom";

import AllHeader from "./components/Header/AllHeader"

import Login from "./components/NavBar/Nav-Destinos/Login";


import Cursos from "./components/NavBar/Nav-Destinos/Cursos";
import Enlaces from "./components/NavBar/Nav-Destinos/Enlaces";
import Grupos from "./components/NavBar/Nav-Destinos/Grupos";
import Signup from "./components/NavBar/Nav-Destinos/Grupos";



//Aqui vienen todas las rutas que tenemos

const Routes = ()=> (
    <Switch>
        <Route exact path= "/"           component={AllHeader}      />
      
        <Route exact path= "/cursos"    component={Cursos}          />
        <Route exact path= "/enlaces"   component={Enlaces}         />
        <Route exact path= "/grupos"    component={Grupos}          />
        <Route exact path= "/login"     component={Login}           />
        <Route exact path= "/signup"    component={Signup}          />



    </Switch>
);


export default Routes;
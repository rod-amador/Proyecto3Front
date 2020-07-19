
import React from "react";
import { Switch, Route } from "react-router-dom";

// contenido de landing

import AllHeader from "./components/Header/AllHeader"

// enlaces del navbar
import Cursos from "./components/NavBar/Cursos";
import Enlaces from "./components/NavBar/Enlaces";
import Grupos from "./components/NavBar/Grupos";

// si está loggeado
import Books from "./components/Books/Books";
import Videos from "./components/Videos/Videos"
import Gratis from "./components/NavBar/Gratis";

//No está loggeado
import LoginForm from "./components/Forms/Login"
import SignupForm from "./components/Forms/SignupForm";
import LandingPrincipal from "./components/Landing/LandingPrincipal";



const Routes = ()=> (
    <Switch>
        <Route exact path= "/"          component={LandingPrincipal}       />
      
        <Route exact path= "/cursos"    component={Cursos}          />
        <Route exact path= "/enlaces"   component={Enlaces}         />
        <Route exact path= "/grupos"    component={Grupos}          />


        <Route exact path= "/login"     component={LoginForm}           />
        <Route exact path= "/signup"    component={SignupForm}      />

        <Route exact path= "/books"     component={Books}           />
        <Route exact path= "/videos"    component={Videos}          />
        <Route exact path= "/gratis"    component={Gratis}          />

    </Switch>
);


export default Routes;

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
//boton de logout

//No está loggeado
import Login from "./components/Forms/Login"
import SignupForm from "./components/Forms/SignupForm";

const Routes = ()=> (
    <Switch>
        <Route exact path= "/"          component={AllHeader}       />
      
        <Route exact path= "/cursos"    component={Cursos}          />
        <Route exact path= "/enlaces"   component={Enlaces}         />
        <Route exact path= "/grupos"    component={Grupos}          />


        <Route exact path= "/login"     component={Login}           />
        <Route exact path= "/signup"    component={SignupForm}      />

        <Route exact path= "/books"     component={Books}           />
        <Route exact path= "/videos"    component={Videos}          />

    </Switch>
);


export default Routes;
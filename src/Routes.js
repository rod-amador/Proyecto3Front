
import React from "react";
import { Switch, Route } from "react-router-dom";

import AllHeader from "./components/Header/AllHeader"

// registro y login
import Login from "./components/NavBar/Nav-Destinos/Login";

// enlaces del navbar
import Cursos from "./components/NavBar/Nav-Destinos/Cursos";
import Enlaces from "./components/NavBar/Nav-Destinos/Enlaces";
import Grupos from "./components/NavBar/Nav-Destinos/Grupos";
import FormikFormUser from "./components/Forms/Formik";
import Books from "./components/Books/Books";





//Aqui vienen todas las rutas que tenemos

const Routes = ()=> (
    <Switch>
        <Route exact path= "/"           component={AllHeader}      />
      
        <Route exact path= "/cursos"    component={Cursos}          />
        <Route exact path= "/enlaces"   component={Enlaces}         />
        <Route exact path= "/grupos"    component={Grupos}          />
        <Route exact path= "/login"     component={Login}           />
        <Route exact path= "/books"    component={Books}          />
        <Route exact path= "/form"      component={FormikFormUser}  />


    </Switch>
);


export default Routes;
import React, {Component} from "react"
import Info from "./Info"
import Copyright from "./Copyright"
import Header from "./Header"

import {IngresoPasivo, IngresoActivo} from "./TiposIngresos"
import Carrousel from "./Carrousel"
import FreeOffer from "./FreeOffer"


class LandingPrincipal extends Component {
    state= {}
    render(){

        return (
            <div className="">
               
               
                <Header/>
                <Info/>
                <FreeOffer/>
                <Carrousel/>
                <IngresoActivo/>
                <IngresoPasivo/>
               
                <Copyright/>
            </div>
        )}}

export default LandingPrincipal

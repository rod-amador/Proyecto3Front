import React, {Component} from "react"
import Info from "./Info"
import Copyright from "./Copyright"
import Header from "./Header"

import {IngresoPasivo, IngresoActivo} from "./TiposIngresos"
import Carrousel from "./Carrousel"
import FreeOffer from "./FreeOffer"
import Info2 from "./info2"
import Call from "./Call"
import LastMsg from "./LastMsg"


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
                <Info2/>
                <Call/>
                <LastMsg/>
               
                <Copyright/>
            </div>
        )}}

export default LandingPrincipal

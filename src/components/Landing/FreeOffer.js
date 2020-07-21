import React, {Component} from "react"
import {Link} from "react-router-dom"

import {themeBlack, themeBlue} from "../themes"

class FreeOffer extends Component {
    state= {}
    render(){

        return (
            <div className="uk-margin-left uk-margin-right " style={themeBlack}>

                <h3 className="uk-text-center"
                    style={themeBlue}>Regístrate con tu correo y accede a material gratuito exclusivo para ti</h3>

                    <section className="uk-margin-left uk-margin-right uk-flex uk-flex-center" uk-grid="true">
                        <div className="uk-grid-width-1-3 uk-text-center">Un PDF gratuito con las 5 mejores estrategias para mejorar tu historial crediticio        </div>
                        <div className="uk-grid-width-1-3 uk-text-center">Una sección de libros que te serán de utilidad y complementarán el contenido del Libro    </div>
                        <div className="uk-grid-width-1-3 uk-text-center">Videos exclusivamente escogidos para iniciarte en el mundo de las inversiones y finanzas  </div>
                    </section> <br/>

                    <button className="uk-button uk-button-default uk-align-center">
                            <Link to={"/signup"} style={{color:"#00A5DB"}}   >   Registrarme             </Link>                   
                    </button>
                    <br/>
                
            </div>

            
        )}}

export default FreeOffer


import React, {Component} from "react"

import {themeBlack, themeBlue} from "../themes"

class LastMsg extends Component {
    state= {}
    render(){

        return (
            <div className="uk-margin-left uk-margin-right uk-margin-top " style={themeBlack}>

            <h3 className="uk-text-center"
                style={themeBlue}>Te aseguro que la información que encontrarás vale más que el oro</h3>

                <section className="uk-margin-left uk-margin-right uk-flex uk-flex-center" uk-grid="true">
                    <div className="uk-grid-width-1-1@s uk-text-justify">

                    No importa si tienes pocos ingresos, si estas endeudado, si ya generas mucho dinero 
                    o si solo quieres mejorar tu situacion economica.
                    
                    Este libro te dará opciones y alternativas para que cualquiera mejore su situacion.
                    Este libro sobrepasará todas tus expectativas. <br/> <hr/>
                   <h6 className="uk-text-center" style={{color:"#00A5DB", fontSize:"3rem"}}>    <strong>         ¿Qué esperas para leerlo?         </strong>          </h6>
                    
                    </div>

                    <button className="uk-button uk-button-secondary uk-align-center">
                            <strong>  Adquirir Libro        </strong>                      
                        </button>
                </section> 

        </div>

            
        )}}

export default LastMsg

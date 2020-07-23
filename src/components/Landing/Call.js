import React, {Component} from "react"
import {Link} from "react-router-dom"

import {themeBlack, themeBlue} from "../themes"

class Call extends Component {
    state= {}
    render(){

        return (
            <div className="uk-margin-left uk-margin-right " style={themeBlack}>

                <h3 className="uk-text-center"
                    style={themeBlue}>Conoce lo que la mayoría de la gente ignora</h3>

                    <section className="uk-margin-left uk-margin-right uk-flex uk-flex-center" uk-grid="true">
                        <ul className="uk-list">
                                <li className="uk-grid-width-1-3@s uk-list-muted uk-text-center">Mejora tu situación financiera.                               </li>
                                <li className="uk-grid-width-1-3@s uk-text-center">Distingue las oportunidades de las estafas.                   </li>
                                <li className="uk-grid-width-1-3@s uk-text-center">Benefíciate de manera inmediata con los enlaces de afiliados. </li>
                        </ul>
                    </section> <br/>

                    <button className="uk-button uk-button-default uk-align-center">
                            <Link to={"/enlaces"} style={{color:"#00A5DB"}}   >   Enlaces de Afiliados             </Link>                   
                    </button>
                    <br/>
                
            </div>

            
        )}}

export default Call


import React, {Component} from "react"

import ganarDinero from "../../images/ganarDinero.jpg"
import ladron from "../../images/ladron.jpg"



import {themeBlack, themeBlue} from "../themes"

class Info2 extends Component {
    state= {}
    render(){

        return (
            <section className="uk-margin-left uk-margin-right uk-margin-top" >

                <div className="uk-flex uk-flex-center uk-align-center uk-margin uk-width-expand " uk-grid="true">

                            <div className="uk-width-1-2@s 
                                            uk-card uk-card-default uk-card-body 
                                            uk-cover-container
                                            ">
                                        <canvas width="300px" height="300px"></canvas>
                                        <img src={ganarDinero} alt="No alcanzan las cuentas" uk-cover="true" />
                            </div>
                            
                            <div className="uk-width-1-2@m uk-card uk-card-default uk-card-body" style={themeBlack}>
                                <h4 className="uk-text-center" style={themeBlue}>
                                        Aprende a Invertir <hr/>
                                </h4>
                                <ul>
                                    <li>Aprende a pensar y razonar como lo hacen los ricos      </li> <br/>
                                    <li>Vuélvete un experto al analizar riesgo y diversificando </li> <br/>
                                    <li>Invierte en bolsa y en bienes raíces                    </li> <br/>
                                    <li>Obtén rendimientos de al menos 12% anual sin riesgo     </li> <br/>
                                </ul>
                            </div>
                </div>



                <div className="uk-flex uk-flex-center uk-align-center uk-margin uk-width-expand " uk-grid="true">

            
                        <div className="uk-width-1-2@m uk-card uk-card-default uk-card-body" style={themeBlack}>
                            <h4 className="uk-text-center" style={themeBlue}>
                                    Aprende la Verdad del Sistema Financiero Mexicano <hr/>
                            </h4>
                            <ul>
                                <li>Los Bancos NO son un lugar seguro para tu dinero    </li> <br/>
                                <li>Un AFORE jamás te garantizará un retiro digno       </li> <br/>
                                <li>Una hipoteca puede ser el peor error de tu vida     </li> <br/>
                                <li>¿Qué es mejor: rentar o comprar?                    </li> <br/>
                            </ul>
                        </div>

                        <div className="uk-width-1-2@s 
                                        uk-card uk-card-default uk-card-body 
                                        uk-cover-container
                                        ">
                                    <canvas width="300px" height="300px"></canvas>
                                    <img src={ladron} alt="No alcanzan las cuentas" uk-cover="true" />
                        </div>

                </div>

            </section>
        )}}

export default Info2
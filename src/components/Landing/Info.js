import React, {Component} from "react"
import endeudado from "../../images/endeudado.jpg"
import estres from "../../images/estres.jpg"
import pobre from "../../images/pobre.jpg"

import {themeWhite, themeBlack, themeGreen, themeBlue} from "../themes"

class Info extends Component {
    state= {}
    render(){

        return (
            <section className="uk-margin-left uk-margin-right" >

                <div className="uk-flex uk-flex-center uk-align-center uk-margin uk-width-expand " uk-grid="true">

                            <div className="uk-width-1-3@m uk-card uk-card-default uk-card-body" style={themeBlack}>
                                <h4 className="uk-text-center" style={themeGreen}>
                                    <strong>    ¿Tienes deudas? </strong>
                                </h4>
                                <ul>
                                    <li>Aprende la mejor manera de saldarlas    </li> <br/>
                                    <li>En el menor tiempo posible  </li> <br/>
                                    <li>Pagando la menor cantidad de interés   </li> 
                                </ul>
                            </div>

                            <div className="uk-width-1-3@m uk-card uk-card-default uk-card-body">
                                <img src={endeudado} />
                            </div>

                            <div className="uk-width-1-3@m uk-card uk-card-default uk-card-body" style={themeBlack}>
                            <h4 className="uk-text-center" style={themeGreen}>
                                    <strong>    ¿Estás en Buró de Crédito? </strong>
                                </h4>
                                <ul>
                                    <li>Te enseñaré como funciona                              </li> <br/>
                                    <li>Cómo mejorar tu Score Crediticio                       </li> <br/>
                                    <li>Cómo adquirir Tarjetas de Crédito aún estando en Buró  </li> 
                                </ul>
                            </div>
                </div>

                <div className="uk-flex uk-flex-center uk-align-center uk-margin uk-width-expand " uk-grid="true" >

                            <div className="uk-width-1-3@m uk-card uk-card-default uk-card-body">
                                <img src={estres}  />
                            </div>


                            <div className="uk-width-1-3@m uk-card uk-card-default uk-card-body" 
                                 style={themeBlack}>

                                <h4 className="uk-text-center" 
                                    style={themeGreen}>
                                    <strong>    Te diré dónde obtener la mejor tasa de crédito </strong>
                                </h4>

                                <ul>
                                    <li>Aprende a endeudarte como lo hacen los ricos      </li> <br/>
                                    <li>Usa el dinero de otros para crear riqueza propia  </li> <br/>
                                    <li>Invierte ese dinero y ve cómo crece por sí solo   </li> 
                                </ul>
                            </div>

                            <div className="uk-width-1-3@m uk-card uk-card-default uk-card-body">
                                   <img src={pobre} />
                            </div>
                </div>                

                </section>
        )}}

export default Info
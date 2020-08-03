import React, {Component} from "react"

import cuentas from "../../images/cuentas.jpg"
import tdc from "../../images/TDC.jpg"
import ahorro from "../../images/ahorro.jpg"

import {themeBlack, themeBlue} from "../themes"

class Info extends Component {
    state= {}
    render(){

        return (
            <section className="uk-margin-left uk-margin-right uk-margin-top" >

                <div className="uk-flex uk-flex-center uk-align-center uk-margin uk-width-expand " uk-grid="true">

                            <div className="uk-width-1-3@m uk-card uk-card-default uk-card-body" style={themeBlack}>
                                <h4 className="uk-text-center" style={themeBlue}>
                                        ¿Muchas deudas? <br/> 
                                        ¿No te salen las cuentas? <br/> <hr/>
                                </h4>
                                <ul>
                                    <li>Aprende la mejor manera de saldarlas    </li> <br/>
                                    <li>Invirtiendo el menor tiempo posible     </li> <br/>
                                    <li>Pagando la menor cantidad de interés    </li> 
                                </ul>
                            </div>

                            <div className="uk-width-1-3@s
                                            uk-visible@s 
                                            uk-card uk-card-default uk-card-body 
                                            uk-cover-container
                                            ">
                                        <canvas width="300px" height="300px"></canvas>
                                        <img src={cuentas} alt="No alcanzan las cuentas" uk-cover="true" className="" />
                            </div>

                            <div className="uk-width-1-3@m uk-card uk-card-default uk-card-body" style={themeBlack}>
                            <h4 className="uk-text-center" style={themeBlue}>
                                        ¿Estás en Buró de Crédito? <br/> <hr/>
                            </h4>

                                <ul>
                                    <li>Te enseñaré cómo funciona y cómo aprovecharlo a tu favor.               </li> <br/>
                                    <li>Sabrás cómo mejorar tu Score Crediticio rápidamente                     </li> <br/>
                                    <li>Podrás adquirir Tarjetas de Crédito aún estando en Buró de Crédito      </li> 
                                </ul>
                            </div>
                </div>

                <div className="uk-flex uk-flex-center uk-align-center uk-margin uk-width-expand " uk-grid="true" >

                            <div className="uk-width-1-3@s 
                                            uk-visible@s
                                            uk-card uk-card-default uk-card-body 
                                            uk-cover-container">
                                                
                                <canvas width="300px" height="300px"></canvas>
                                <img src={ahorro} uk-cover="true" alt="Ahorrando poco a poco hasta obtener riqueza" />
                            </div>


                            <div className="uk-width-1-3@m uk-card uk-card-default uk-card-body" 
                                 style={themeBlack}>

                                <h4 className="uk-text-center" 
                                   style={themeBlue}>
                                    ¿Vives al día?<br/> <hr/>
                                </h4>

                                <ul>
                                    <li>Aprende a financiarte como lo hacen los ricos     </li> <br/>
                                    <li>Te diré dónde obtener la mejor tasa               </li> <br/>
                                    <li>Usa el dinero de otros para crear riqueza propia  </li> <br/>
                                    <li>Invierte ese dinero y crea patrimonio propio      </li> 
                                </ul>
                            </div>

                            <div className="uk-width-1-3@s
                                            uk-visible@s 
                                            uk-card uk-card-default uk-card-body 
                                            uk-cover-container">
                                                
                                <canvas width="300px" height="300px"></canvas>
                                <img src={tdc} uk-cover="true" alt="Aprende a manejar tus TDC" />
                            </div>
                </div>                

                </section>
        )}}

export default Info
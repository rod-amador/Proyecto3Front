import React, {Component} from "react"
import Count from "./Countdown"

let fondo = require ("../../images/home.jpg")

class Header extends Component {
    state= {}
    render(){

        return (
                <main className="uk-margin-left uk-margin-right">

                        <section style={{backgroundImage:`url(${fondo})`}}
                                 className="uk-width-1-1@s uk-height-viewport uk-background-cover 
                                 uk-background-blend-darken uk-background-primary
                                 uk-flex uk-flex-center uk-flex-middle uk-flex-column" >  
                        
                        <h1 style={{color: "white", fontSize: "3.5rem"}} 
                            className="uk-text-center ">
                                    La Mejor Inversión De Tu Vida Será Este Libro
                        </h1>

                        <p      className="uk-margin-top uk-width-1-2@s uk-text-justify" 
                                style={{color: "white", fontSize: "1.7rem"}}> 

                                ¿Te ves trabajando cada día, durante más de 8 horas diarias,         
                                perdiendo otras 2 horas en transporte para ir y venir de tu        
                                trabajo, para llegar en la noche a tu casa y repetir la misma         
                                rutina sin descanso,  durante más de 30 años de tu vida?
                        </p>

                        <button className="uk-button uk-button-secondary uk-align-center">
                                        <strong>        Adquirir Libro </strong>                                
                        </button>
                        <Count/>
                        </section>
             
              </main>
        )}}

export default Header
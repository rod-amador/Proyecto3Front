import React, {Component} from "react"
import {themeBlack} from "../themes"

let Free = require("../../images/SellLikeCrazy.pdf")
let fondo = require("../../images/confetti.jpg")

class Gratis extends Component {
    state= {}
    render(){

        return (
                <section 
                style={{backgroundImage:`url(${fondo})`,}}
                className="uk-flex-column uk-flex uk-flex-center uk-flex-middle
                uk-background-cover 
                uk-height-viewport
                uk-background-blend-darken uk-background-primary
                ">
                  
                <h1 style={{color:"white", fontSize:"3rem"}}
                    className="uk-text-center"
                >
                    Las 5 mejores estrategias para mejorar tu Score Crediticio
                </h1>
                
                
                <button className="uk-button-secondary uk-align-center">
                    <a  href={Free} download className="uk-link-muted"
                        style={{fontSize: "2rem",
                                color:"white",
                        }}> 
                        
                        Descargar PDF 
                        
                    </a>

                </button>
            
                </section>
        )}}

export default Gratis
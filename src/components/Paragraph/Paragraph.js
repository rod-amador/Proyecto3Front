import React from "react"

import {themeWhite, themeBlack} from "../themes"

//componente tonto --> solo recibira props .
let playa = require("../../images/playa.jpg")
let allMoney = require("../../images/allmoney.jpg")
let bienesRaices = require("../../images/bienesRaices.jpg")
let curso = require("../../images/curso.jpg")
let endeudado = require("../../images/endeudado.jpg")
let estres = require("../../images/estres.jpg")
let growMoney = require("../../images/growMoney.jpg")
let libertadFinanciera = require("../../images/libertadFinanciera.jpg")
let logo = require("../../images/logo.jpg")
let pobre = require("../../images/pobre.jpg")
let registrate = require("../../images/registrate.jpg")
let trafico = require("../../images/trafico.jpg")
let tutorial = require("../../images/tutorial.jpg")
let relojDeArena = require("../../images/relojDeArena.jpg")
let savings = require("../../images/savings.jpg")
let trabajar = require("../../images/trabajar.jpg")



//la imagen se extiende de acuerdo al ancho del BODY

export const ParagraphTop = () => {
    
    return (
        <section className="uk-section uk-margin-left uk-margin-right" style={themeBlack}>

            <article className="uk-card-default uk-child-width-1-2@s uk-margin-left uk-margin-right " uk-grid="true">
                            <div            className="uk-cover-container" > 
                                            <img src={trabajar} alt="" uk-cover="true" />
                                            <canvas width="auto" height="300"></canvas>
                            </div>

                            <div            className="uk-flex uk-align-center uk-flex-center uk-flex-middle">   
                                        <p  className="uk-text-justify uk-margin-right">
                                            ¿Te ves trabajando cada día durante al menos 8 horas diarias,
                                            gastando otras 2-3 horas en el tráfico al trasladarte,
                                            durante más de 30 años para después retirarte con el 30% de tu salario?
                                        </p>
                            </div>
            </article>  

        </section>
    )}














/////////////////////////////////////////////////////////////////////////

export const Paragraph1 = () => {
    
        return (
            <section className="uk-section uk-margin-left uk-margin-right" style={{backgroundColor:"blue"}}>

                <article>
                    <div className="uk-card uk-card-default uk-child-width-1-2@s uk-margin-left uk-margin-right " uk-grid="true">
                                
                                <div        className="uk-text-center uk-cover-container"> 
                                            <canvas width="100%" height="300"></canvas>
                                            <img src={playa} alt="" uk-cover="true" /> 
                                </div>

                                <div>   
                                        <div className="uk-card-body uk-text-center uk-vertical-align-middle">
                                                contenido
                                        </div>  
                                    </div>

                    </div>
                </article>  

            </section>
        )}

export const Paragraph2 = () => {
    
            return (
                <section className="uk-margin-left uk-margin-right" style={{backgroundColor:"blue"}}>
    
                    <article>
                        <div className="uk-card uk-card-default uk-child-width-1-2@s uk-margin-left uk-margin-right" uk-grid="true">
                                    
                                    <div>   
                                        <div className="uk-card-body uk-text-center uk-vertical-align-middle">
                                                contenido
                                        </div>  
                                    </div>

                                    <div            className=" uk-cover-container"> 
                                                    <canvas width="100%" height="300"></canvas>
                                                    <img src={playa} alt="" uk-cover="true" /> 
                                    </div>
    
                        </div>
                    </article>  
    
                </section>
            )}

export const Paragraph3 = () => {
    
                return (
                    <section className="uk-section uk-margin-left uk-margin-right" style={{backgroundColor:"blue"}}>
        
                        <article>
                            <div className="uk-card uk-card-default uk-child-width-1-2@s uk-margin-left uk-margin-right uk-text-center" uk-grid="true">
                                        
                                        <div            className="uk-text-center uk-vertical-align-middle uk-margin-top"> 
                                                        TITULO EN GRANDE 
                                        </div>
        
                                        <div>   
                                            <div className="uk-card-body uk-text-center uk-vertical-align-middle">
                                                    contenido
                                                    
                                            </div>  
                                        </div>
        
                            </div>
                        </article>  
        
                    </section>
                )}

export const Paragraph4 = () => {
    
                    return (
                        <section className="uk-section uk-margin-left uk-margin-right" style={{backgroundColor:"blue"}}>
            
                            <article>
                                <div className="uk-card uk-card-default uk-child-width-1-2@s uk-margin-left uk-margin-right" uk-grid="true">
                                            
                                            <div>   
                                                <div className="uk-card-body uk-text-center uk-vertical-align-middle">
                                                        contenido
                                                        
                                                </div>  
                                            </div>

                                            <div            className="uk-text-center uk-margin-top"> 
                                                            TITULO EN GRANDE 
                                            </div>

                                </div>
                            </article>  
            
                        </section>
                    )}
            










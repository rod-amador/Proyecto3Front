import React from "react"

import {themeBlack} from "../themes"
let puzzle = require("../../images/puzzle.jpg")

///////////////////////////////////////////////////////////////////

export const Paragraph1 = () => {
    
        return (
            <section className="uk-section uk-margin-left uk-margin-right" style={{backgroundColor:"blue"}}>

                <article>
                    <div className="uk-card uk-card-default uk-child-width-1-2@s uk-margin-left uk-margin-right " uk-grid="true">
                                
                                <div        className="uk-text-center uk-cover-container"> 
                                            <canvas width="100%" height="300"></canvas>
                                            <img src={puzzle} alt="" uk-cover="true" /> 
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
                                                    <img src={puzzle} alt="" uk-cover="true" /> 
                                    </div>
    
                        </div>
                    </article>  
    
                </section>
            )}


//Ingreso Activo
export const IngresoActivo = () => {
    
                return (
                    <section className="uk-section uk-margin-left uk-margin-right" style={themeBlack}>
                        <article className="uk-child-width-1-2@s uk-margin-left uk-margin-right" uk-grid="true">
           
                                <h1 className=" uk-text-center uk-flex uk-flex-center uk-flex-middle uk-flex-first@s"
                                            style={{color:"#00A5DB"}}> 
                                                    ¿Qué es un INGRESO ACTIVO?
                                </h1>
        
                                <p  style={{fontSize:"1.3rem"}}
                                    className="uk-text-justify uk-flex uk-flex-center uk-flex-middle ">   
                                                
                                                Es todo ingreso que depende de tu  tiempo y esfuerzo.                                         
                                                En el momento en que no seas capaz de dedicar tiempo a tu trabajo, perderás
                                                tu único ingreso y empezará a empeorar tu situación financiera.
                                </p>
                        </article>  
        
                    </section>
                )}

//Ingreso Pasivo              
export const IngresoPasivo = () => {
    
                    return (
                        <section className="uk-section uk-margin-left uk-margin-right" style={themeBlack}>
            
                            <article className=" uk-child-width-1-2@s uk-margin-left uk-margin-right" uk-grid="true">
                             
                                            
                                <h1 className=" uk-text-center uk-flex uk-flex-center uk-flex-middle"
                                    style={{color:"#00A5DB"}}> 
                                                    ¿Qué es un INGRESO PASIVO?
                                </h1>
                                            
                                            
                                              
                                <p    style={{fontSize:"1.3rem"}}
                                      className="  uk-text-justify uk-flex uk-flex-center uk-flex-middle 
                                                uk-child-width-1-2@s uk-flex-first@m       ">

                                    Es el ingresos que no depende de tu tiempo o esfuerzo para generar dinero.
                                    Este tipo de ingreso se generacon inversiones. Te ayudará a dejar
                                    de depender de un trabajo fijo para subsistir. 
                                    Es en este tipo de ingresos en el que radica la libertad financiera. 
                                                        
                                </p>  
                                            

                                            

                             
                            </article>  
            
                        </section>
                    )}
            

export const Algo = () => {
    
}










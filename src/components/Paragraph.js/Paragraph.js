import React, {Component} from "react"

//componente tonto --> solo recibira props .
let playa = require("../../images/playa.jpg")

//la imagen se extiende de acuerdo al ancho del BODY

export const ParagraphTop = () => {
    
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
            










import React, {Component} from "react"

class Copyright extends Component {
    state= {}
    render(){

        return (
            <section className="uk-flex uk-flex-center">

                   <div className="uk-width-1-2">
                       <h6 className="uk-text-center">
                           La mejor inversión de tu vida será este Libro. <br/>
                           Copyright 2020.
                       </h6> 
                   </div>

                   <div className="uk-width-1-2@s uk-flex uk-flex-center">
                        <p>  Únete a nuestros dos grupos:</p>
                                <a      href= "https://www.facebook.com/groups/aprendiendoainvertirmx" target="_blank" rel="noopener noreferrer"> 
                                    <span uk-icon="icon: facebook"></span> 
                                </a>

                                <a       href="https://chat.whatsapp.com/KFaBYkixl5mJDXJH1zaran" target="_blank" rel="noopener noreferrer"> 
                                    <span style={{color:"green"}} uk-icon="icon: whatsapp">    </span>         
                                </a>
                    </div>

            
            </section>
        )}}

export default Copyright
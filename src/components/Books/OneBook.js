import React, {Component} from "react"
import {themeBlack} from "../themes"

//componente tonto --> solo recibira props .

class OneBook extends Component {
    
    render(){
        return (

            <article className="uk-width-1-1@s uk-align-center" style={themeBlack}  >
                            
                <div className="uk-card-header uk-flex uk-flex-center uk-flex-column uk-text-center">   
                            <img src={this.props.image } alt="" width="150px" height="200px" className="uk-align-center"   />    
                        <div>
                                <h3 style={{color:"#00A5DB"}}>   <strong>  {this.props.title}  </strong>  </h3>    
                                <span>    {this.props.author}   </span>
                        </div>
                                    
                        <p      className="uk-text-justify  uk-flex uk-flex-center">  
                                {this.props.description}     
                        </p> 

                        <a style={{color:"#00A5DB"}} 
                        href={this.props.link} 
                        target="_blank" rel="noopener noreferrer" > Adquirir en Amazon </a>       
                </div>
            </article>
                
           

        )}}

export default OneBook
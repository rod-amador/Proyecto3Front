import React, {Component} from "react"
import ReactPlayer from "react-player"
import { themeBlack } from "../themes"

class OneVideo extends Component {
    
    render(){
        return (

      
            <article className="uk-width-1-1@s uk-align-center" style={themeBlack}  >
                
                <div className="uk-card-default uk-width-1-1@m" style={themeBlack}>
                   <hr/> 
                        <div className="uk-text-center">
                            <h3 style={{color:"#00A5DB"}}     
                                className="uk-text-center uk-margin-top">  
                                {this.props.title}  
                            </h3>    <hr/>

                            <p  className="uk-text-justify uk-margin-left uk-margin-right">  
                                {this.props.description}                                        <br/>       
                            </p> 
                            <span> <strong className="uk-text-center"> DURACIÓN:  {this.props.time} </strong> </span>
                        </div>
                    <hr/>
                    
                    <ReactPlayer 
                        width="90%"  
                        className="uk-align-center"
                        url={this.props.url}
                        controls playsinline uk-video="true"
                        rel="noopener"
                        >
                    </ReactPlayer> <br/>

                </div>
            </article>  

        )}}

export default OneVideo
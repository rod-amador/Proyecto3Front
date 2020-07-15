import React, {Component} from "react"
import ReactPlayer from "react-player"

class OneVideo extends Component {
    
    render(){
        return (

        <section className="uk-section" style={{backgroundColor:"red"}}>
            <article className="uk-container">
                <div className="uk-card-default uk-width-1-1@m">
                   <hr/> 
                        <div className="uk-text-center">
                            <h4      className="uk-text-center uk-margin-top">  {this.props.title}  </h4>  <hr/>
                            <p       className="uk-text-justify uk-margin-left uk-margin-right">  
                                    {this.props.description}                                        <br/> <br/>            
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
        </section>  

        )}}

export default OneVideo
import React, {Component} from "react"

//componente tonto --> solo recibira props .

class OneBook extends Component {
    
    render(){
        return (

            <section className="uk-section" style={{backgroundColor:"red"}}>
                   <article className="uk-container">
                       <div className="uk-card uk-card-default uk-width-1-1@m uk-align-center">

                            <div className="uk-card-header uk-flex uk-flex-center uk-flex-column uk-text-center">   
                                    <img src={this.props.image } alt="" width="150px" height="200px" className="uk-align-center"   />  
                                    
                                <div>
                                        <h3> <strong>  {this.props.title}  </strong>  </h3>    
                                             <span>    {this.props.author}            </span>
                                </div>
                            </div>

                            <div className="uk-card-body"> <p className="uk-text-justify">  {this.props.description}     </p> 
                            </div>

                            <div className="uk-card-footer uk-flex uk-flex-center"> 
                                <a href={this.props.link} target="_blank" rel="noopener noreferrer" > 
                                    Adquirir en Amazon 
                                </a>       
                            </div>

                        </div>

                   </article>
                
            </section>  

        )}}

export default OneBook
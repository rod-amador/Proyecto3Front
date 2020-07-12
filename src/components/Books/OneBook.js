import React, {Component} from "react"

//componente tonto --> solo recibira props .

class OneBook extends Component {
    state= {contents: [],}

    render(){
        return (

       
        
            <section className="uk-section" style={{backgroundColor:"red"}}>
                   <article className="uk-container">
                       <div className="uk-card uk-card-default uk-width-1-1@m uk-align-center">

                            <div className="uk-card-header uk-flex uk-flex-center uk-flex-column uk-text-center">   
                                    <img src={this.props.image } alt="" width="300px" height="300px" className="uk-align-center"   />  
                                    
                                <div>
                                        <h3> <strong>  {this.props.title}  </strong>  </h3>    
                                             <span>    {this.props.author}            </span>
                                </div>
                            </div>

                            <div className="uk-card-body uk-flex uk-flex-center"> <p className="uk-text-center">  {this.props.description}     </p> 
                            </div>

                            <div className="uk-card-footer uk-flex uk-flex-center"> <a href={this.props.link}> Adquirir en Amazon </a>       </div>

                        </div>

                   </article>
                    <br/> <br/>
            </section>  
          
        //   <article className="uk-container">
        //                <div className="uk-card uk-card-default uk-width-1-1@m uk-align-center">

        //                     <div className="uk-card-header uk-flex uk-flex-center uk-flex-column uk-text-center">   
        //                             <img src="https://i.pinimg.com/originals/83/6a/fa/836afa541a590d6205d5fb912d37db9c.png"  alt="" width="300px" height="300px" className="uk-align-center"   />  
                                    
        //                         <div>
        //                             <h3>   <strong>   El Hombre más rico de babilonia       </strong>       </h3>    
        //                             <span>George S. Clason</span>
        //                         </div>
        //                     </div>

        //                     <div className="uk-card-body uk-flex uk-flex-center">       
        //                         <p className="uk-text-center">  Descripción     </p> 
        //                     </div>

        //                     <div className="uk-card-footer uk-flex uk-flex-center">     <a href="https://amzn.to/329n8Uq"> Adquirir en Amazon </a>       </div>

        //                 </div>

        //            </article>

        )}}

export default OneBook
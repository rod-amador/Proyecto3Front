import React, { Component } from "react";

class Grupos extends Component {
  
    render() {
      return (
  
        <div  className="uk-grid uk-margin-left uk-margin-right"     
              style={{backgroundColor:"black"}}> 

            <section  style={{color:"blue"}}
                      className="uk-card-default uk-width-1-1 uk-align-center
                                 uk-margin-left uk-margin-right uk-margin-top uk-margin-bottom">

                      <div className="uk-card-header uk-text-center"> 
                          <a href= "https://www.facebook.com/lamejorinversiondetuvida" target="_blank" rel="noopener noreferrer"> 
                                <span uk-icon="icon: facebook; ratio:8"></span> 
                          </a>
                      </div>
                  
                      <div className="uk-card-body uk-text-center">   
                            <p> 
                              Sigue mi Libro de Inversiones en facebook                         <br/>  
                              <strong> LA MEJOR INVERSIÓN DE TU VIDA SERÁ ESTE LIBRO  </strong> <br/> 
                            </p>      
                      </div>
            </section>


            <section  style={{color:"blue"}}
                      className="uk-card-default uk-width-1-4 uk-align-center ">

                      <div  className="uk-card-header uk-text-center uk-margin-right"> 
                            <a href="https://www.facebook.com/groups/aprendiendoainvertirmx" target="_blank" rel="noopener noreferrer">   
                                <span uk-icon="icon: facebook; ratio:8"></span>       
                            </a>
                            
                      </div>

                      <div  className="uk-card-body uk-text-center uk-margin-right">   
                            <p>
                                Únete a mi grupo                              
                                <strong> APRENDIENDO A INVERTIR MX </strong> 
                                Si tienes una duda, entra al grupo            
                                y con gusto te ayudaré a resolverla.        
                            </p>      
                      </div>
            </section>


            <section style={{color:"green"}}
                     className="uk-card-default uk-width-1-4 uk-align-center">

                    <div className="uk-card-header uk-text-center uk-margin-right"> 
                        <a className="uk-link-muted" href="https://chat.whatsapp.com/KFaBYkixl5mJDXJH1zaran" target="_blank" rel="noopener noreferrer"> 
                                <span style={{color:"green"}} uk-icon="icon: whatsapp; ratio:8">    </span>         
                        </a>
                    </div>

                    <div className="uk-card-body uk-text-center uk-margin-right">   
                          <p> 
                            Únete al grupo de whatsapp              <br/>
                            para recibir apoyo en temas financieros <br/> 
                            
                          </p>      
                    </div>
            </section>


            <section  style={{color:"red"}}
                      className="uk-card-default uk-width-1-4 uk-align-center ">

                      <div className="uk-card-header uk-text-center uk-margin-right"> <span uk-icon="icon: youtube; ratio:8"> </span>   </div>
                      <div className="uk-card-body uk-text-center uk-margin-right">   
                            <p> <strong>APRENDIENDO A INVERTIR </strong> <br/>En Construcción...                          </p>      
                      </div>
            </section>

        </div>
      );
    }
  }
  
  export default Grupos;
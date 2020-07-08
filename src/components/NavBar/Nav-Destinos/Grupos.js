import React, { Component } from "react";

class Grupos extends Component {
  
    render() {
      return (
  
        <div className="uk-grid uk-grid-small uk-child-width-expand" style={{backgroundColor:"black"}}> 

            <section 
            style={{color:"blue"}}
            className="uk-card uk-card-default uk-width-1-2 uk-margin-top uk-margin-bottom">

                  <div className="uk-card-header uk-text-center"> 
                      <a href= "https://www.facebook.com/lamejorinversiondetuvida"> 
                            <span uk-icon="icon: facebook; ratio:8"></span> 
                      </a>
                  
                  </div>
                  
                  <div className="uk-card-body uk-text-center">   
                    <p> 
                      Sigue mi Libro de Inversiones en facebook<br/>  
                      <strong> LA MEJOR INVERSIÓN DE TU VIDA SERÁ ESTE LIBRO  </strong> <br/>
                      
                    </p>      
                  </div>
            </section>

            <section 
            style={{color:"blue"}}
            className="uk-card uk-card-default uk-width-1-2 uk-margin-top uk-margin-bottom">
                  <div className="uk-card-header uk-text-center"> 
                            <a href="https://www.facebook.com/groups/aprendiendoainvertirmx">   
                                <span uk-icon="icon: facebook; ratio:8"></span>       
                            </a>
                       
                  </div>

                  <div className="uk-card-body uk-text-center">   
                      <p>
                        Únete a mi grupo <br/> 
                        <strong> APRENDIENDO A INVERTIR MX </strong> <br/>  
                        Si tienes una duda, postéala en el grupo <br/> 
                        y con gusto te ayudaré.        
                      </p>      
                  </div>
            </section>

            <section style={{color:"green"}}
            className="uk-card uk-card-default uk-width-1-2 uk-margin-top uk-margin-bottom">
                  <div className="uk-card-header uk-text-center"> 
                      <a className="uk-link-muted" href="https://chat.whatsapp.com/KFaBYkixl5mJDXJH1zaran"> 
                        <span style={{color:"green"}} uk-icon="icon: whatsapp; ratio:8">    </span>         
                      </a>
                       
                  </div>

                  <div className="uk-card-body uk-text-center">   
                      <p> 
                        Únete al grupo de whatsapp  <br/>
                        para recibir apoyo en temas financieros <br/> 
                        y compartir noticias de finanzas e inversiones
                      </p>      
                  </div>
            </section>

            <section style={{color:"red"}}
            className="uk-card uk-card-default uk-width-1-2 uk-margin-top uk-margin-bottom">
                  <div className="uk-card-header uk-text-center"> 
                      <span uk-icon="icon: youtube; ratio:8"> </span>   
                  </div>

                  <div className="uk-card-body uk-text-center">   
                     <p> <strong>APRENDIENDO A INVERTIR </strong> <br/>En Construcción...     </p>      
                  </div>
            </section>

        </div>
      );
    }
  }
  
  export default Grupos;
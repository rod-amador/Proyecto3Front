import React, { Component } from "react";
import {themeBlack} from "../themes"

import paginaLibro  from "../../images/rrss1b.jpg"
import grupoFace    from "../../images/rrss2b.jpg"
import grupoWhats   from "../../images/rrss3b.jpg"
import canal        from "../../images/rrss4b.jpg"

class Grupos extends Component {
  
    render() {
      return (
  
        <div  className="uk-grid uk-margin-left uk-margin-right"     
              style={themeBlack}> 

            <section  className="uk-width-1-1@s ">

                      <div className="uk-card-header uk-text-center"> 
                          <a  href= "https://www.facebook.com/lamejorinversiondetuvida" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              > 
                                <img  src={paginaLibro} alt="libro de inversiones" />
                          </a>
                      </div>
                  
                     
            </section>


            <section  className="uk-width-1-3@s">

                      <div  className="uk-card-header"> 
                            <a href="https://www.facebook.com/groups/aprendiendoainvertirmx" target="_blank" rel="noopener noreferrer">   
                            <img  src={grupoFace} alt="grupo de inversiones facebook" />
                            </a>
                            
                      </div>

                      
            </section>


            <section className="uk-width-1-3@s">

                    <div className="uk-card-header"> 
                        <a className="uk-link-muted" href="https://chat.whatsapp.com/KFaBYkixl5mJDXJH1zaran" target="_blank" rel="noopener noreferrer"> 
                        <img  src={grupoWhats}  alt="grupo de inversiones Whatsapp" />        
                        </a>
                    </div>

                    
            </section>


            <section className="uk-width-1-3@s">

                   <div className="uk-card-header"> 
                        <a className="uk-link-muted" href="https://www.youtube.com/channel/UCeKUFscUC_G1I0VSgC9Gj1g" target="_blank" rel="noopener noreferrer"> 
                        <img  src={canal} alt="canal de youtube en construcción" />        
                        </a>
                    </div>
            </section>

        </div>
      );
    }
  }
  
  export default Grupos;
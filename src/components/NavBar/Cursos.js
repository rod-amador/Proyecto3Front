 import React, { Component } from "react";
 import {themeBlack} from "../themes"

 let libro = require("../../images/curso1.jpg")

class Cursos extends Component {
  
    render() {
      return (
  
        <div style={themeBlack} className="uk-margin-left uk-margin-right">

          <section style={{backgroundImage:`url(${libro})`}}
                   className="uk-height-viewport uk-padding-bottom uk-background-cover">

          </section>
 
            <section className="uk-text-center">

                      <div style={themeBlack} className=" uk-flex-column uk-flex-center uk-flex-middle">
                            <h1 style={{color:"#00A5DB"}}>APRENDERÁS: </h1>

                            <ul className="uk-list uk-list-collapse" >                           
                                <li> <span className="uk-margin-small-right" uk-icon="check"></span>    A potencializar tus finanzas                                   </li>
                                <li> <span className="uk-margin-small-right" uk-icon="check"></span>     A crear múltiples fuentes de ingresos                          </li>
                                <li> <span className="uk-margin-small-right" uk-icon="check"></span>    Dónde y cómo invertir para multiplicar tus ingresos            </li>
                                <li> <span className="uk-margin-small-right" uk-icon="check"></span>    A obtener ingresos pasivos permanentes                         </li>
                                <li> <span className="uk-margin-small-right" uk-icon="check"></span>    A jugar con créditos y deudas para hacerte de riqueza propia   </li> <br/>
                            </ul> 

                           
                            <p className="uk-text-center" style={themeBlack} >  
                                Con todo esto,                                                
                                podrás tener tendrás las herramientas necesarias a tu disposición    
                                para aumentar tus ingresos, obtener libertad financiera     
                                y salir a flote de cualquier crisis que pueda presentarse.          
                            </p>
                            
                      </div>
            </section>
                
        <div>

              <h1 className="uk-text-center" 
                  style={{color:"black", backgroundColor:"white"}} >   
                  <strong>TEMARIO DEL CURSO </strong>
              </h1>

              <section className="uk-grid uk-margin-left uk-margin-right" style={themeBlack}>
                      
                      <article  
                                className="uk-width-1-3@m ">

                                <h4 className="uk-text-center uk-margin-top" style={{color:"#00A5DB"}}>I. LEYES Y PRINCIPIOS FINANCIEROS</h4>
                                  <ul>
                                      <li>  Trabaja de forma inteligente                            </li>
                                      <li>  Aumenta tu cantidad de ingresos sin aumentar tus gastos </li>
                                      <li>  Aumenta la deuda buena, disminuye la mala               </li>
                                      <li>  El dinero genera dinero                                 </li>
                                      <li>  Creando ingresos pasivos                                </li>
                                      <li>  Acelera la velocidad del dinero                         </li>                    
                                  </ul>
                        </article>

                      <article  
                                className=" uk-width-1-3@m">

                                <h4 className="uk-text-center uk-margin-top " style={{color:"#00A5DB"}} >II. GASTOS</h4>
                                  <ul>
                                      <li> Bancos: Deja de regalar tu dinero        </li>
                                      <li> AFORES: Los ahorros basura               </li>
                                      <li> Hipotecas: La triste realidad mexicana   </li>
                                      <li> ¿Qué es mejor? Renta vs Hipoteca         </li>
                                      <li> El poder del Saldo Insoluto              </li>
                                      <li> Buro y Score de crédito                  </li>
                                      <li> Dónde y cómo pedir un préstamo           </li>
                                      <li> Mejores estrategias para pagar deudas    </li>
                                  </ul>
                                  </article>

                      <article  
                                className="uk-width-1-3@m"> 
                      
                                <h4 className="uk-text-center uk-margin-top" style={{color:"#00A5DB"}} >III. INGRESOS</h4> 
                                  
                                  <p> Ingresos Activos / Ingresos Semi-Pasivos        </p>
                                      <ul>
                                          <li> Nunca tengas una sola fuente de ingresos </li>
                                          <li> Tu primer y único ingreso: Tu trabajo    </li>
                                          <li> Generando Ingresos extras                </li>
                                          <li> Maquinas expendedoras                    </li>
                                          <li> Creación y venta de cursos               </li>
                                          <li> Marketing de afiliados                   </li>
                                          <li>Juntando todos los ingresos semi-pasivos  </li> <br/>
                                    </ul>
                      </article>

                      <article  
                                className="uk-width-1-3@m">

                                <h4 className="uk-text-center uk-margin-top" style={{color:"#00A5DB"}}>  IV. INGRESOS PASIVOS: INVERSIONES </h4> 
                                    <ul>
                                        <li>  Aprende a jugar con el dinero         </li>
                                        <li>  Manejando y disminuyendo el riesgo    </li>
                                        <li>  Empresas de inversión y Fintech       </li>
                                        <li>  Bienes Raíces: Crowdfunding y Fibras  </li>
                                        <li>  Bolsa de Valores                      </li>
                                        <ul>
                                            <li>  Value Investing                   </li>
                                            <li>  Dividend Growth Investing         </li>
                                        </ul>
                                      </ul>
                                </article>
           
                      <article  
                                className="uk-width-1-3@m">
                                  <h4 className="uk-text-center uk-margin-top" style={{color:"#00A5DB"}}> V. SINERGIA E INTERÉS COMPUESTO </h4> 
                                    <ul>
                                      <li>  Creando Sinergía entre tus fuentes de ingresos         </li>
                                      <li>  La importancia del Cashflow                            </li>
                                      <li>  El Saldo Insoluto y las Inversiones                    </li>
                                      <li>  Crea ingresos pasivos permanentes con dinero prestado  </li>
                                      <li>  Aprovechando el interés compuesto                      </li>
                                      <li>  Creando un portafolio de inversión propio              </li>
                                      <li>  Libertad Financiera alcanzable                         </li>
                                    </ul>
                      </article>

                      <article className="uk-width-1-3@m">

                            <h4 className="uk-text-center uk-margin-top" style={{color:"#00A5DB"}}> ¿QUÉ INCLUYE? </h4>  <hr/>
                                <p style={{color:"#00A5DB", fontSize:"1.2rem"}} className="uk-text-center">
                                    5 sesiones de 1:00 hora por zoom.                     <br/>
                                    PDF: La mejor inversión de tu vida será este libro. <br/>
                                    Beneficios monetarios: Enlaces de Afiliados.
                                </p> 
                                <hr/>
                                <h4 className="uk-text-center uk-margin-top" style={{color:"#00A5DB"}}> COSTO </h4> 
                                <p style={{color:"#00A5DB", fontSize:"1.2rem"}} className="uk-text-center uk-margin-bottom">
                                    Si lo tomas sólamente tú: $1,500.               <br/>
                                    Si lo tomas tú y un amigo: $1,000 c/u.          <br/>
                                </p> 
                          
                      </article>
                      
                    </section>
                    </div>
        </div>

        
        
      );
    }
  }
  
  export default Cursos;
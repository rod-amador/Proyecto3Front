import React, { Component } from "react";
import {themeBlack, themeWhite} from "../themes"

let fondo = require("../../images/ahorro.jpg")

class Enlaces extends Component {
  
    render() {
      return (
  
        <section className="uk-align-center uk-text-center uk-margin-left uk-margin-right" style={{themeBlack}}>
             
           

                        <section style={{backgroundImage:`url(${fondo})`}}
                                 className="uk-width-1-1@s uk-height-viewport uk-background-cover 
                                 uk-background-blend-darken uk-background-primary
                                 uk-flex uk-flex-center uk-flex-middle uk-flex-column" >  
                        
                                <h1 style={{color: "white", fontSize: "3.5rem"}} 
                                    className="uk-text-center ">
                                            Mis Enlaces de Afiliados
                                </h1>

                                <p      className="uk-margin-top uk-width-1-2@s uk-text-justify" 
                                        style={{color: "white", fontSize: "1.6rem"}}> 

                                        En esta sección pongo a tu disposición códigos y enlaces
                                        para que puedas inscribirte y abrir cuentas
                                        en empresas para ahorrar e invertir.
                                        
                                        La mayoría de estos códigos te darán un beneficio monetario por inscribirte con ellos. 
                                        Otras, solo me beneficiarán a mi con una pequeña comisión.
                                </p>

                        </section>
             
             
       
            <article style={themeBlack} className="uk-width-1-1@s uk-align-center">
                <h2 style={{color:"#00A5DB"}}>SOFIPOS</h2>  

                  <p style={{themeBlack}}>
                      Son empresas de ahorro reguladas por la misma institución que regula y controla a los bancos.  <br/>
                      En ellas, tu dinero está protegido por el gobierno hasta por $158,000 pesos.                   <br/>
                      Pagan rendimientos de hasta el 12% anual por ahorrar tu dinero con ellas. 
                  </p>


                  <div style={themeWhite}>   

                      <table className="uk-table-hover uk-table-divider uk-table-responsive">
                        <thead>
                            <tr>
                                <th>EMPRESA</th>
                                <th>DESCRIPCIÓN</th>
                                <th>ENLACE</th>
                            </tr>
                        </thead>

                        <tbody className="uk-background-muted">

                            <tr>
                                <td style={{color:"#00A5DB"}}>  <strong>  SuperTasas  </strong>  </td>
                                <td cclassName="uk-text-center" style={{fontSize: "1.2rem"}}>
                                  Te darán una tarjeta digital de $500 al depositar $20,000 a la cuenta los primeros 7 días. 
                                  Al firmar contrato, deberás mencionar que fuiste referido por mí *Rodrigo Amador*.
                                </td>
                                <td>  <a style={{color:"#00A5DB"}} href="https://supertasas.com/tarjeta-de-regalo/?code=P1NN4"> Clickeame</a> </td>
                            </tr> 
                            <tr>
                                <td style={{color:"#00A5DB"}}>  <strong>  Generamás  </strong> </td>
                                <td className="uk-text-center" style={{fontSize: "1.2rem"}}>
                                  El beneficio en este caso es solo para mi,
                                  el código es mi correo electrónico. <br/>
                                  Debes escoger la opción de ahorro con un plazo de al menos 6 meses.
                                </td>
                                <td style={{color:"#00A5DB"}}>rodrigo_betan@hotmail.com</td>
                            </tr>
                            <tr>
                                <td style={{color:"#00A5DB"}}> <strong>   Kubo Financiero    </strong> </td>
                                <td className="uk-text-center" style={{fontSize: "1.2rem"}}>
                                  El beneficio es para todo el que se una al grupo de ahorro. <br/>
                                  La tasa aumentará conforme el ahorro grupal sea mayor.
                                </td>
                                <td>  <a style={{color:"#00A5DB"}} href="https://bit.ly/34oPaJW?fbclid=IwAR0qzlEb09T40h42Xb746bv44mEVwgDrlcUFEwkYJl4E_8fw3UHhrwJGvf8://supertasas.com/tarjeta-de-regalo/?code=P1NN4"> Clickeame</a> </td>
                            </tr>
                            <tr>
                                <td style={{color:"#00A5DB"}}>   <strong>  Financiera Sustentable</strong>   </td>
                                <td className="uk-text-center" style={{fontSize: "1.2rem"}}>
                                  El beneficio en este caso solo es mío. <br/>
                                  Introduces el código al momento de escoger el tiempo de inversión
                                </td>
                                <td style={{color:"#00A5DB"}}>AMADOR-2518</td>
                            </tr>

                        </tbody>
                    </table>
                  </div>

            </article>
                <br/>
               
    

              <article style={themeBlack} className="uk-width-1-1@s uk-align-center">
                <h2 style={{color:"#00A5DB"}}>CROWDFUNDING</h2>  
                  <p style={{themeBlack}}>
                    Son empresas de préstamos de persona a persona. <br/>
                    En ellas eliges a quién prestarle dinero 
                    y ese dinero se te devolverá mes con mes más el interés correspondiente hasta saldar la deuda.
                  </p>

                  <div className="uk-flex uk-flex-center " style={themeWhite}>     
                      <table className="uk-width-1-1@s uk-table-hover uk-table-divider uk-table-responsive">
                        <thead>
                            <tr>
                                <th>EMPRESA</th>
                                <th>DESCRIPCIÓN</th>
                                <th>ENLACE</th>
                            </tr>
                        </thead>

                        <tbody className="uk-background-muted">

                            <tr>
                            <td style={{color:"#00A5DB"}}>  <strong>  Prestadero  </strong>  </td>
                                <td className="uk-text-center" style={{fontSize: "1.2rem"}}>
                                  El beneficio es solo para mí.
                                  Aplica tanto al inscribirte como inversor como al pedir un préstamo.
                                </td>
                                <td>  <a style={{color:"#00A5DB"}} href="https://prestadero.com/reginvitados.php?ref=caf0f3c"> Clickeame</a> </td>
                            </tr> 

                            <tr>
                            <td style={{color:"#00A5DB"}}>  <strong>  Yo Te Presto  </strong>  </td>
                                <td className="uk-text-center" style={{fontSize: "1.2rem"}}>
                                  Recibes $200 al invertir $10,000 en la plataforma.
                                  Debes usar tanto el enlace como el código si es que te lo piden.
                                </td>
                                <td style={{color:"#00A5DB"}}>
                                <a style={{color:"#00A5DB"}} href="https://www.yotepresto.com/?fbclid=IwAR0OvlYowGIHUGLD1_XahT8jKInPDRtwrMAO8b8UDUDMhV-82H4c8JArf1c"> Clickeame  </a> 
                                <br/>RAB-1407139
                                 
                                </td>

                            </tr>

                            <tr>
                            <td style={{color:"#00A5DB"}}>  <strong>  Afluenta  </strong>  </td>
                                <td className="uk-text-center" style={{fontSize: "1.2rem"}}>
                                 Si hay código, pero aún no lo tengo.
                                </td>
                                <td style={{color:"#00A5DB"}}>Aún no disponible</td>
                            </tr>

                            <tr>
                            <td style={{color:"#00A5DB"}}>  <strong>  Doopla  </strong>  </td>
                                <td className="uk-text-center" style={{fontSize: "1.2rem"}}>
                                  Te regalan $250 pesos al invertir un mínimo de $2,500.
                                </td>
                                <td style={{color:"#00A5DB"}}>Aún no disponible</td>
                            </tr>

                        </tbody>
                    </table>
                  </div>

            </article>
                <br/>
              
           
                <article style={themeBlack} className="uk-width-1-1@s uk-align-center">
                <h2 style={{color:"#00A5DB"}}>CROWDFUNDING INMOBILIARIO</h2>  
                  <p style={{themeBlack}}>
                    Empresas que te permitirán invertir en bienes raíces
                    sin tener el capital necesario para adquirir una propiedad propia. <br/>
                    Puedes comprar pequeños "cachitos" y recibir el rendimiento equivalente:
                    Invierte desde $1,000. <br/>
                    <strong style={{color:"#00A5DB"}}> Algunas de estas empresas te permitirán recibir rendimientos PERMANENTES. </strong>
                  </p>

                  <div className="uk-flex uk-flex-center" style={themeWhite}>     
                      <table className="uk-width-1-1@s uk-table-hover uk-table-divider uk-table-responsive">
                        <thead>
                            <tr>
                                <th>EMPRESA</th>
                                <th>DESCRIPCIÓN</th>
                                <th>ENLACE</th>
                            </tr>
                        </thead>
                        <tbody className="uk-background-muted">
                         
                            <tr>
                            <td style={{color:"#00A5DB"}}>  <strong>  Inverspot  </strong>  </td>
                                      <td className="uk-text-center" style={{fontSize: "1.2rem"}}>
                                        Solo me beneficiaría a mi. Debes inscribirte con el link.
                                      </td>
                                      <td >  <a style={{color:"#00A5DB"}} href="https://app.inverspot.mx/sign-up?spot_refiere=CLI7099"> Clickeame</a> </td>
                            </tr> 

                            <tr>
                            <td style={{color:"#00A5DB"}}>  <strong>  M2crowd  </strong>  </td>
                                      <td className="uk-text-center" style={{fontSize: "1.2rem"}}>
                                        Solo me beneficiaría a mi. Debes inscribirte con el link y realizar tu 1° inversión.
                                      </td>
                                      <td>  <a style={{color:"#00A5DB"}} href="https://www.m2crowd.com/signup/?ref=e863fb2"> Clickeame</a> </td>
                            </tr>

                            <tr>
                            <td style={{color:"#00A5DB"}}>  <strong>  Expansive  </strong>  </td>
                                    <td className="uk-text-center" style={{fontSize: "1.2rem"}}>
                                      Recibirás un 1% adicional de rendimiento por un año. 
                                      Usa el enlace y contacta por correo al staff.
                                      Dale mi nombre y correo y dile que deseas validar el beneficio de afiliados.
                                    </td>
                                    <td style={{color:"#00A5DB"}}>  
                                      <a style={{color:"#00A5DB"}} href="https://expansive.mx/invite/index.html?code=idodnx"> Clickeame</a> <br/>
                                     
                                      rodrigo_betan@hotmail.com
                                      
                                    </td>
                            </tr>

                            <tr>
                            <td style={{color:"#00A5DB"}}>  <strong>  100Ladrillos  </strong>  </td>
                                    <td className="uk-text-center" style={{fontSize: "1.2rem"}}>
                                      Solo me beneficiaría a mi. Debes usar el enlace.
                                    </td>
                                    <td>  <a style={{color:"#00A5DB"}} href="https://bit.ly/2Bpb9Hh"> Clickeame</a> </td>
                            </tr>

                            <tr>
                            <td style={{color:"#00A5DB"}}>  <strong>  Monific  </strong>  </td>
                                    <td className="uk-text-center" style={{fontSize: "1.2rem"}}>
                                      Recibirás un 1% adicional sobre todas sus inversiones. Solo debes usar el enlace.
                                    </td>
                                    <td>  <a style={{color:"#00A5DB"}} href="https://app.monific.com/?r=d0895ddc-66df-457e-93cd-6f657d2b717c"> Clickeame</a> </td>
                            </tr>

                        </tbody>
                    </table>
                  </div>

            </article>
                <br/>
               

                <article style={themeBlack} className="uk-width-1-1@s uk-align-center">
                <h2 style={{color:"#00A5DB"}}>OTRAS EMPRESAS FINTECH</h2>  
                  <p style={{themeBlack}}>
                    Son empresas de préstamos de persona a persona. <br/>
                    En ellas eliges a quién prestarle dinero <br/>
                    y ese dinero se te devolverá mes con mes más el interés correspondiente hasta saldar la deuda
                  </p>

                  <div className="uk-flex uk-flex-center" style={themeWhite}>     

                      <table className="uk-width-1-1@s uk-table-hover uk-table-divider uk-table-responsive">
                        <thead>
                            <tr>
                                <th>EMPRESA</th>
                                <th>DESCRIPCIÓN</th>
                                <th>ENLACE</th>
                            </tr>
                        </thead>

                        <tbody className="uk-background-muted">
                            <tr>
                            <td style={{color:"#00A5DB"}}>  <strong>  Fundary  </strong>  </td>
                                <td className="uk-text-center" style={{fontSize: "1.2rem"}}>
                                  Recibirás $250 por cada $5,000 invertidos. <br/> 
                                  Solo debes usar el enlace.
                                </td>
                                <td style={{color:"#00A5DB"}}>  Aún no disponible</td>
                            </tr> 

                            <tr>
                            <td style={{color:"#00A5DB"}}>  <strong>  Wortev Capital  </strong>  </td>
                                <td className="uk-text-center" style={{fontSize: "1.2rem"}}>
                                  Recibirás $1,000 al invertir $10,000. 
                                  Es de las únicas plataformas que dan 24% anual <br/>
                                  Solo debes usar el enlace.
                                </td>
                                <td>  <a style={{color:"#00A5DB"}} href="https://wortev.capital/ref/rodrigo_betan/"> Clickeame</a> </td>
                            </tr>

                            <tr>
                            <td style={{color:"#00A5DB"}}>  <strong>  Iban Wallet  </strong>  </td>
                                <td className="uk-text-center" style={{fontSize: "1.2rem"}}>
                                  Es una cuenta de ahorro/débito.     
                                  Recibirás $100 al depositar $1,000,
                                  si depositas $50,000 (no tienen que invertirse), 
                                  te darán 8% anual que se pagará de forma diaria. 
                                  Solo debes poner el código al registrarte en la App.
                                </td>
                                <td style={{color:"#00A5DB"}}>  
                                <a style={{color:"#00A5DB"}} href="https://app.ibanwallet.com/"> Clickeame</a> <br/>
                                  RRODRIG2DK5U 
                                </td>
                            </tr>

                            <tr>
                            <td style={{color:"#00A5DB"}}>  <strong>  Bnext  </strong>  </td>
                                <td className="uk-text-center" style={{fontSize: "1.2rem"}}>
                                  Es una cuenta de débito sin comisiones, 
                                  da 5% de descuento en Netflix, Spotify y Recargas. 
                                  Al depositar $100 y activar tu tarjeta, te regalarán otros $100 pesos. 
                                  Solo debes usar el link y depositar
                                </td>
                                <td>  
                                <a style={{color:"#00A5DB"}} href="https://bnext-mex.app.link/wX7JCrLeq7"> Clickeame</a> <br/>
                                </td>
                            </tr>


                        </tbody>
                    </table>
                  </div>

            </article>
                <br/>
            

        </section>
        
      );
    }
  }
  
  export default Enlaces;
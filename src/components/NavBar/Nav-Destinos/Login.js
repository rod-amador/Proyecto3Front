import React, { Component } from "react";
import { withFormik, Form, Field } from 'formik'

let fondo = require("../../../images/fondo.jpg")
let logo = require ("../../../images/logo.jpg");

class Login extends Component {
  
  render() {
    return (

      <main>

        <section style={{backgroundImage:`url(${fondo})`}}
          className="
          uk-background-blend-luminosity
          uk-background-primary  

          uk-height-small uk-panel
          uk-height-viewport 
          uk-background-blend-multiply 
          uk-background-cover

          uk-flex 
          uk-flex-center 
          uk-flex-middle" >  
          
          <article className="uk-background-muted"
          style={{border:"solid 2px black",
            width: "1000px",
            padding: "10px"
            }}>

            <div className="uk-flex uk-flex-center uk-flex-middle uk-margin-large-left">
              <img src={logo} alt="company" className="uk-margin"/>
    

            <form className="uk-form uk-width-1-2 uk-margin-large-top uk-margin-large-left">

                {/* USERNAME: NOMBRE DE LA PERSONA */}
                  <span uk-icon="icon: users; ratio: 2" className="uk-margin-small-right"> </span>
                  
                  <input
                    name="email"
                    type="text"
                    placeholder="Email"
                    className="uk-width-1-2 uk-form-large uk-text-center"
                    style={{ border: "solid 2px black" }}
                  ></input>
            
                {/*PASSWORD A INTRODUCIR --> HACER EL POST */}
              <div className="uk-form-password">
                  <span uk-icon="icon: lock; ratio: 2" className="uk-margin-small-right"> </span>
                  <input
                    name="password"
                    className="uk-margin-small-top uk-width-1-2 uk-form-large uk-text-center"
                    type="password"
                    placeholder="Password"
                    style={{ border: "solid 2px black" }}>
                  </input>
              </div>
                {/* BOTON DE LOGIN PARA ENVIAR SOLICITUD*/}

              <div className=" uk-align-center ">
                  <button className=" uk-align-center uk-button uk-button-primary"
                          style={{backgroundColor:"black" }}>
                    Login
                  </button>
              </div>
              
            </form>
            
            </div>
          </article>
        </section>
     
      </main>
      
    );
  }
}

export default Login;
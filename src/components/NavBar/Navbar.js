import React from "react"
import { Link } from "react-router-dom";
import AppContext from "../../AppContext"


export default function NavBar () {
  
    return (

<AppContext.Consumer>
        { (value) => {
            console.log(value)
            const {user} = value.state

            return (
                <nav className="uk-navbar uk-navbar-container">

                <section className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li>      <Link to={"/"}        >    Home                   </Link></li>
                        <li>      <Link to={"/grupos"}  >    Grupos                 </Link></li>
                        <li>      <Link to={"/cursos"}  >    Cursos                 </Link></li>
                        <li>      <Link to={"/enlaces"} >    Enlaces de Afiliados   </Link></li>
                    </ul>
                </section>
    
                <section className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li>      <Link to={"/videos"}  >    Videos             </Link></li>
                        <li>      <Link to={"/books"}   >    Libros             </Link></li>
                        <li>      <Link to={"/login"}   >    Login              </Link></li>
                        <li>      <Link to={"/signup"}  >    Signup             </Link></li>
    
                        
                        {user.email ? 
                            <div>Usuario conectado</div> : 
                            <div>No funciono</div>}
                                           
                    </ul>
                </section>
            </nav>
        
            )
        }}

       
    </AppContext.Consumer>   

        )}


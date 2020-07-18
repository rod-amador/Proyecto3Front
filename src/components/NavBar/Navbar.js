import React from "react"
import { Link } from "react-router-dom";
import AppContext from "../../AppContext"



export default function NavBar () {
  
    return (

<AppContext.Consumer>
        { (value) => {
            
            const {user} = value.state
            const { logout } = value;

            return (
                <nav className="uk-navbar uk-navbar-container uk-margin-left uk-margin-right">

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
              
                        {user.email ? 
                            <React.Fragment>
                                <li>      <Link to={"/books"}              >   Libros             </Link></li>
                                <li>      <Link to={"/videos"}             >   Videos             </Link></li>
                                <li>      <Link to={""} onClick={logout}   >   Logout             </Link></li>
                             </React.Fragment> 
                             : 
                            <React.Fragment>
                             <li>      <Link to={"/login"}   >    Login / Signup             </Link></li>
                             </React.Fragment>}
                    </ul>
                </section>
            </nav>
        
            )
        }}

       
    </AppContext.Consumer>   

        )}


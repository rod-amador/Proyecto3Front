import React, {Component} from "react"
import { Link } from "react-router-dom";

class NavBar extends Component {
    state= {}
    render(){

    return (
        <nav className="uk-navbar uk-navbar-container">

            <section className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    <li>      <Link to={"/"} >    Home                  </Link></li>
                    <li>      <Link to={"/grupos"} >    Grupos                </Link></li>
                    <li>      <Link to={"/cursos"} >     Cursos               </Link></li>
                    <li>      <Link to={"/enlaces"} >    Enlaces de Afiliados  </Link></li>
                </ul>
            </section>

            <section className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                    <li>      <Link to={"/login"}  >    Login     </Link></li>
                    <li>      <Link to={"/signup"} >    SignUp    </Link></li>
                </ul>
            </section>

        </nav>
        )}}

export default NavBar
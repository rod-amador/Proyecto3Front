import React, {Component} from "react"

class Header extends Component {
    state= {}
    render(){
        return (
            <header className="
            uk-section 
            uk-section-secondary
            uk-text-center
            ">
                <section 
                    style={{color:"white"}}
                    className="uk-flex-column">

                    <h1>    LANDING TEMPLATE</h1>
                    <p>     MENSAJE DEBAJO DEL TÍTULO</p>
                    <button 
                    className="uk-button uk-button-primary">
                            Descargar libro
                    </button>

                </section>

              
                
            </header>
        )

    }
}

export default Header
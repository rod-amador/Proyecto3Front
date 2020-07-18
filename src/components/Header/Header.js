import React, {Component} from "react"

class Header extends Component {
    state= {}
    render(){
        return (
            <header className="
            uk-section 
            uk-section-secondary
            uk-text-center
            uk-margin-left
            uk-margin-right
            ">
                <section 
                    style={{color:"white"}}
                    className="uk-flex-column">

                    <h1>   ESTE LIBRO SERÁ LA MEJOR INVERSIÓN DE TU VIDA</h1>
                    <p className="uk-margin-top">     
                        ¿Te ves trabajando cada día, durante más de 8 horas diarias,         <br/>
                        gastando 2-3 horas en transporte para ir y venir de tu trabajo,       <br/>
                        para llegar en la noche a tu casa y repetir la misma rutina <br/>       
                        sin descanso,  durante más de 30 años de tu vida?
                    </p>
                    <button 
                    className="uk-button uk-button-primary uk-margin-top">
                            Adquiere la mejor inversión de tu vida
                    </button>

                </section>
                
            </header>
        )

    }
}

export default Header
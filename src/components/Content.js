import React, {Component} from "react"

//componente tonto --> solo recibira props .

class Content extends Component {
    state= {contents: [],}

    render(){
        return (

            <section className="uk-section">
                   <div className="uk-container">
                       <article className="uk-card uk-card-default uk-width-1-2@m">

                            <div className="uk-card-header uk-grid-small uk-flex uk-flex-center">     
                                    <h3><strong>    Título a escoger        </strong></h3>       
                            </div>

                            <div className="uk-card-body uk-flex uk-flex-center">
                                    <p>     Descripción del artículo o video a crear.       </p>
                            </div>

                            <div className="uk-card-footer uk-flex uk-flex-center">
                                    <a href="https://www.google.com" target="_blank">      
                                                 Ver todo el Artículo         
                                    </a>
                            </div>

                        </article>
                   </div>
            </section>  
        )}}

export default Content
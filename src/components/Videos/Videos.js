import React, {Component} from "react";
import OneVideo from "./OneVideo"
import {getVideos} from "../../services/videosService"

let fondo = require("../../images/puzzle.jpg")

class VideoService extends Component {
    state = {   videos: []  };

    //petición de la data
    componentDidMount(){
        getVideos()
            .then(res => {
                const { result: videos } = res.data
                this.setState( {videos} )
            })
            .catch( err => { console.log(err)} )
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    render () {
        return (
            <section className="uk-margin-left uk-margin-right"> 

                <div style={{backgroundImage:`url(${fondo})`}}
                     className="uk-width-1-1@s uk-height-viewport uk-background-cover 
                        uk-background-blend-darken uk-background-primary
                        uk-flex uk-flex-center uk-flex-middle uk-flex-column">
                    
                    <h1 style={{color: "white", fontSize: "3rem"}} className="uk-text-center ">
                           <strong> Videos Útiles para iniciar a invertir  </strong>
                    </h1>

                    <p  className="uk-margin-top uk-width-1-2@s uk-text-justify" 
                        style={{color: "white", fontSize: "1.5rem"}}> 

                    Veremos unos cuantos videos que te serán útiles para adentrarte
                    más en el mundo de las finanzas a inversiones. 
                    
                    Algunos tratarán de educación, otros tratarán de finanzas y algunos más serán prácticos. Todo esto con el fin
                    de que te nutras y aprendas a distinguir un negocio exitoso de posibles estafas. 
                    
                    A mayor conocimiento, menor riesgo correrás en el mundo de las inversiones.

                
                    </p>

                </div> 
            
              
                    {this.state.videos.length > 0    ? 
                        this.state.videos.map(   (video, index) => <OneVideo key={index} {...video}  /> ) 
                        : 
                        <div className="uk-alert-primary uk-text-center" uk-alert="true"> <p> No hay videos </p> </div> }

            </section>
        );
    }
}

export default VideoService

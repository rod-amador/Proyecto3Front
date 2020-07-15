import React, {Component} from "react";
import OneVideo from "./OneVideo"
import {getVideos} from "../../services/videosService"

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
            <section className="uk-section uk-text-justify ">  
            
                <h3 className="uk-text-center">SECCIÓN DE VIDEOS</h3>
                <p className="uk-margin-left uk-margin-right">
                    En esta sección veremos unos cuantos videos que te serán útiles para adentrarte
                    más en el mundo de las finanzas a inversiones. Algunos tratarán de educación,
                    otros tratarán de finanzas y algunos más serán prácticos. Todo esto con el fin
                    de que te nutras y aprendas a distinguir un negocio exitoso de las estafas.
                 </p>
              
                    {this.state.videos.length > 0    ? 
                        this.state.videos.map(   (video, index) => <OneVideo key={index} {...video}  /> ) 
                        : 
                        <div className="uk-alert-primary uk-text-center" uk-alert="true"> <p> No hay videos </p> </div> }

            </section>
        );
    }
}

export default VideoService

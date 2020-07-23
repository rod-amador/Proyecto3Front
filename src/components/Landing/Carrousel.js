import React, {Component} from "react"
import {Slideshow, Cover} from 'react-uikit3';


let ciclo2 =    require("../../images/ciclo2.jpg")
let reloj2 =    require("../../images/reloj2.jpg")
let bienes2 =   require("../../images/bienes2.jpg")

class Carrousel extends Component {
    state= {}
    render(){

        return (
           
            <div 
                className="uk-margin-left uk-margin-right  "
                >
               
                    <Slideshow slidenav={true} autoplay={true} autoplayInterval={5500} pauseOnHover={false} maxHeight={680}  >
                        <ul className="uk-slideshow-items" >
                            <li style={{height:"100%"}} >   <Cover type="image" src={ciclo2}  />       </li>
                            <li style={{height:"100%"}} >   <Cover type="image" src={reloj2} /> </li>
                            <li style={{height:"100%"}} >   <Cover type="image" src={bienes2} /> </li>
                        </ul>
                    </Slideshow>

            </div>
        )}}

export default Carrousel


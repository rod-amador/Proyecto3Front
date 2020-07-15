import React, {Component} from "react"
import ReactPlayer from "react-player"


class Video extends Component {
    state= {}

    render(){
        return (
             <ReactPlayer 
               width="70%"  
               className="uk-align-center"
               url="https://www.youtube.com/embed/9CS7j5I6aOc"
               controls playsinline uk-video="true"
               rel="noopener noreferrer"
               >
             </ReactPlayer>
        
        )}}
export default Video
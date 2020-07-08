import React, {Component} from "react"

class TitleText extends Component {
    constructor (props) {super(props)
    this.state= {title: "", text: ""}
}

   

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

                    <h1>  {this.props.title}      </h1>
                    <p>    {this.props.text}      </p>
                   

                </section>
            </header>

        )}}

export default TitleText
import React, {Component} from "react";
import OneBook from "./OneBook"
import {getBooks} from "../../services/booksService"

let fondo = require("../../images/foco.jpg")

class BookService extends Component {
    state = {   books: []  };

    //petición de la data
    componentDidMount(){
        getBooks()
            .then(res => {
                const { result: books } = res.data
                this.setState({books})
            
            })
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
                           <strong> Libros útiles que recomiendo <br/> después del mío </strong>
                    </h1>

                    <p  className="uk-margin-top uk-width-1-2@s uk-text-justify" 
                        style={{color: "white", fontSize: "1.5rem"}}> 

                        En esta sección te recomendaré libros que potencializarán tanto tus finanzas como
                        todas las áreas de tu vida, te enseñarán todo lo que necesitas saber para aumentar
                        tu productividad y mejorar los hábitos que tienes, lo que aumentará el éxito en 
                        todo lo que te propongas.
                    </p>

                    </div> 

                    {this.state.books.length > 0 ? 
                        this.state.books.map(   (book, index) => <OneBook key={index} {...book}  /> ) 
                        : 
                        <div className="uk-alert-primary uk-text-center" uk-alert="true"> <p> No estás conectado a la DB </p> </div> }
             </section>
            
            
          










              
                   

        
        );
    }
}

export default BookService

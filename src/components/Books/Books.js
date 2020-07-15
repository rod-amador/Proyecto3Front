import React, {Component} from "react";
import OneBook from "./OneBook"
import {getBooks} from "../../services/booksService"

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
            <section className="uk-section uk-text-justify ">  
                <h3 className="uk-text-center">LIBROS</h3>
                <p className="uk-margin-left uk-margin-right">
                    En esta sección te recomendaré libros que potencializarán tanto tus finanzas como
                    todas las áreas de tu vida, te enseñarán todo lo que necesitas saber para aumentar
                    tu productividad y mejorar los hábitos que tienes, lo que aumentará el éxito en 
                    todo lo que te propongas. Son libros muy interesantes, altamente útiles y que más
                    allá si los recomiendo o nó, cualquier persona saldrá beneficiada al terminarlos.
                 </p>
              
                    {this.state.books.length > 0    ? 
                        this.state.books.map(   (book, index) => <OneBook key={index} {...book}  /> ) 
                        : 
                        <div className="uk-alert-primary uk-text-center" uk-alert="true"> <p> No hay libros </p> </div> }

            </section>
        );
    }
}

export default BookService

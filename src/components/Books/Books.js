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
            <section className="uk-section">  
              
                    {this.state.books.length > 0    ? 
                        this.state.books.map(   (book, index) => <OneBook key={index} {...book}  /> ) 
                        : 
                        <div className="uk-alert-primary uk-text-center" uk-alert="true"> <p> No hay libros </p> </div> }

                   
              
            </section>
        );
    }
}

export default BookService

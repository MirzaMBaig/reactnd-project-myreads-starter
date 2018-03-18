import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom';
import SearchBook from "./SearchBook";
import BooksListing from "./BooksListing";

class BooksApp extends React.Component {

    state = {
        books: [],
        searchedBooks: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
                this.setState( {books})
            }
        )
    }

    search = (query) => {
        BooksAPI.search(query).then(booksSearched => {
            this.setState( {
                 searchedBooks: booksSearched
        })
        })
    }

    updateBookShelf = (book, shelf) => {
        book.shelf = shelf;
        this.setState(prevState => {
            let removeExistingBook = prevState.books.filter(prevBook => prevBook.id !== book.id)
            return {
                books: removeExistingBook.concat(book)
            }
        })
    }

    render() {
        return (
            <div className="app">
                <Route path="/search"
                       render={(props) => (<SearchBook searchedBooks={this.state.searchedBooks}
                                                       updateBookShelf={(book, shelf) => this.updateBookShelf(book, shelf)}
                                                       search={(query) => this.search(query)}/> )}/>

                <Route exact path="/" render={(props) => (
                    <BooksListing updateBookShelf={(book, shelf) => this.updateBookShelf(book, shelf)}
                                  books={this.state.books}/> )}/>
            </div>
        )
    }
}

export default BooksApp

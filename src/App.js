import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Switch } from 'react-router-dom';
import SearchBook from "./SearchBook";
import BooksListing from "./BooksListing";
import NotFoundComponent from './NotFoundComponent';

class BooksApp extends React.Component {

    state = {
        books: [],
        searchedBooks: []
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        }
        )
    }

    search = (query) => {
        BooksAPI.search(query)
            .then(books => {
                console.log(query)
                let booksSearched = [];
                if (!books.error){
                    booksSearched = books
                }
                this.setState({
                    searchedBooks: booksSearched
                })
            })
    }

    updateBookShelf = (book, shelf) => {
        book.shelf = shelf;
        BooksAPI.update(book, shelf).then(updatedBooks => {
            
            this.setState((prevState) => {
                let removeExistingBook = prevState.books.filter(prevBook => prevBook.id !== book.id)
                let updatedBooks = [];
                updatedBooks.push(book);
                books: updatedBooks.push(removeExistingBook)
            })
        })
    }

    render() {
        return (
            <div className="app">
                <Switch>
                    <Route path="/search" forceUpdate
                        render={(props) => (<SearchBook searchedBooks={this.state.searchedBooks}
                            updateBookShelf={(book, shelf) => this.updateBookShelf(book, shelf)}
                            search={(query) => this.search(query)} />)} />

                    <Route exact path="/" render={(props) => (
                        <BooksListing updateBookShelf={(book, shelf) => this.updateBookShelf(book, shelf)}
                            books={this.state.books} />)} />

                    <Route component={NotFoundComponent} />
                </Switch>
            </div>
        )
    }
}

export default BooksApp

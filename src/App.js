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
        this.getAll();
    }

    getAll() {
        BooksAPI.getAll().then((books) => {
            this.setState({ books })
        })
    }

    updateBookShelf = (book, shelf) => {
        book.shelf = shelf;
        BooksAPI.update(book, shelf).then(updatedBooks => this.getAll())
    }

    render() {
        return (
            <div className="app">
                <Switch>
                    <Route path="/search" forceUpdate
                        render={(props) => (<SearchBook books={this.state.books}
                            updateBookShelf={(book, shelf) => this.updateBookShelf(book, shelf)} />)} />

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

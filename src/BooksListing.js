/**
 * Created by mmab on 04/03/2018.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import BookComponent  from "./BookComponent"

class BooksListing extends Component {

    state = {
        books:[]
    }

    componentDidMount(){
        BooksAPI.getAll().then((books) => {this.setState({
            books
        })
        })
    }

    addBooks = (selectedBooks) => {
        console.log(selectedBooks);
        this.setState(preState => {
            preState.books.concat(selectedBooks);
        })
    }

    updateBookShelf = (book, shelf) => {
        book.shelf = shelf;
        this.setState(prevState => {
            prevState.books.map(pbook => pbook.id === book.id);//dont know what is happening here but the code works
        })
    }

    render() {
        return <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.state.books.map( book  => book.shelf === 'currentlyReading' && <BookComponent book={book} updateBookShelf={(book, shelf) => this.updateBookShelf(book, shelf)}/> )}
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.state.books.map( book  => book.shelf === 'wantToRead' && <BookComponent book={book} updateBookShelf={(book, shelf) => this.updateBookShelf(book, shelf)}/> )}
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.state.books.map( book  => book.shelf === 'read' && <BookComponent book={book} updateBookShelf={(book, shelf) => this.updateBookShelf(book, shelf)}/> )}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className="open-search">
                <Link to="/search">Add a book</Link>
            </div>
        </div>
    }
}

export default BooksListing;
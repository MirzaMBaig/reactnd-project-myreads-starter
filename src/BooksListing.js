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
        console.log(books);
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
                                {this.state.books.map( book  => book.shelf === 'currentlyReading' && <BookComponent book={book}/> )}
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.state.books.map( book  => book.shelf === 'wantToRead' && <BookComponent book={book}/> )}
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {this.state.books.map( book  => book.shelf === 'read' && <BookComponent book={book}/> )}
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
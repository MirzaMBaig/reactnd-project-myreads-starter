/**
 * Created by mmab on 04/03/2018.
 */

import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BookComponent  from "./BookComponent"

class BooksListing extends Component {

    render() {
        let books = this.props.books && this.props.books;
        let updateBookShelf = this.props.updateBookShelf && this.props.updateBookShelf;
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
                                {books && (books.map( book  => book.shelf === 'currentlyReading' && <BookComponent key={book.id} book={book} updateBookShelf={(book, shelf) => updateBookShelf(book, shelf)}/> ))}
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {books && (books.map( book  => book.shelf === 'wantToRead' && <BookComponent key={book.id} book={book} updateBookShelf={(book, shelf) => updateBookShelf(book, shelf)}/> ))}
                            </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                            <ol className="books-grid">
                                {books && (books.map( book  => book.shelf === 'read' && <BookComponent key={book.id} book={book} updateBookShelf={(book, shelf) => updateBookShelf(book, shelf)}/> ))}
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
/**
 * Created by mmab on 04/03/2018.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookComponent from "./BookComponent"
import * as BooksAPI from './BooksAPI'


class SearchBook extends Component {

    state = {
        searchedBooks: []
    }

    render() {
        let searchedBooks = this.state.searchedBooks
        let updateBookShelf = this.props.updateBookShelf && this.props.updateBookShelf;
        return <div>
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={(event) => this.search(event.target.value)} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchedBooks && searchedBooks.map(book => <BookComponent key={book.id} book={book} updateBookShelf={(book, shelf) => updateBookShelf(book, shelf)} />)}
                    </ol>
                </div>
            </div>
        </div>
    }

    search = (query) => {
        BooksAPI.search(query)
            .then(books => {
                let booksSearched = [];
                if (books && !books.error) {
                    booksSearched = books
                }
                let existingBooks = this.props.books;
                let updatedBooks = booksSearched.map(book => {
                    let existingBook = existingBooks.filter(bookin => book.title === bookin.title)
                    if (existingBook.length != 0) {
                        book.shelf = existingBook[0].shelf
                        console.log(existingBook[0])
                        console.log(book.shelf)
                    }

                    return book;
                })
                this.setState({
                    searchedBooks: updatedBooks
                })
            })
    }

}

export default SearchBook;

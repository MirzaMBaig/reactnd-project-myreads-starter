/**
 * Created by mmab on 04/03/2018.
 */
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BookAPI from "./BooksAPI";
import BookComponent  from "./BookComponent"


class SearchBook extends Component {
    state = {
        searchBooks:[],
        selectedBooks:[]
    }

    render() {
        let searchBook = this.state.searchBooks?this.state.searchBooks:[];
        return <div>
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        {/*
                         NOTES: The search from BooksAPI is limited to a particular set of search terms.
                         You can find these search terms here:
                         https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                         However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                         you don't find a specific author or title. Every search is limited by search terms.
                         */}
                        <input type="text" placeholder="Search by title or author" onChange={(event)=> this.search(event.target.value)}/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {searchBook && searchBook.map( book => <BookComponent book={book}/>) }
                    </ol>
                </div>
            </div>
        </div>
    }

    search = (query) => {
        console.log(query);
        BookAPI.search(query).then(books => {
            this.setState({searchBooks:books})
        })
    }

}

export default SearchBook;

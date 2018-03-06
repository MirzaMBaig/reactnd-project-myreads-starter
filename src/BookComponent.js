/**
 * Created by mmab on 06/03/2018.
 */

import React, {Component} from "react";

class BookComponent extends Component{

    render(){
       console.log('hashhas');
        let book = this.props.book;
        return  <li key={book.id}>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}></div>
                    <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={(event)=>this.props.updateBookShelf(book, event)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none" disabled>None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors.map(author => <span key={author}>{author}</span> )}</div>
            </div>
        </li>
    }
}

export default BookComponent;
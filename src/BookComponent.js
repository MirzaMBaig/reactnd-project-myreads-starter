/**
 * Created by mmab on 06/03/2018.
 */

import React from "react";

export default function BookComponent(props) {

    let book = props.book;
    let backgroundImageProp = book.imageLinks ? book.imageLinks.thumbnail :'/image/BookNotPictured.png';
    return <li>
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${backgroundImageProp})`
                }}></div>
                <div className="book-shelf-changer">
                    <select value={book.shelf ? book.shelf : 'none'} onChange={(event) => props.updateBookShelf && props.updateBookShelf(book, event.target.value)}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors && book.authors.map(author => <span key={author}>{author}</span>)}</div>
        </div>
    </li>
}


import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link  }from 'react-router-dom';
import SearchBook from "./SearchBook";
import BooksListing from "./BooksListing";

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
          <Route path="/search" component={SearchBook}/>
          <Route exact path="/" component={BooksListing}
          />
      </div>
    )
  }
}

export default BooksApp

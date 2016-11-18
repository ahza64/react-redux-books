
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

// anything returned from this, will be props on BookList container
function mapStateToProps (state) {
  // whatever is returned is props for/in BookList
  return {
    books: state.books
  };
}

function mapDispatchToProps (dispatch) {
  // When selectBook is called, pass results to all reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote BookList from component to container, let it know about selectBook dispatch as a prop

export default connect(mapStateToProps, mapDispatchToProps) (BookList);

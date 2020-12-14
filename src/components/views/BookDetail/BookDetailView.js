import React from 'react';
import bookPropTypes from 'propTypes/book';
import BookItem from 'components/common/book/BookItem';

BookDetailView.propTypes = {
  book: bookPropTypes.isRequired
};

function BookDetailView({book}) {
  return (
    <BookItem book={book} />
  );
}

export default BookDetailView;
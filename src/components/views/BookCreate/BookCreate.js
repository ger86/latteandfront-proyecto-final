import React from 'react';
import {generatePath, useHistory} from 'react-router-dom';
import BookForm from 'components/common/book/BookForm';
import {BOOK_DETAIL} from 'config/router/paths';

function BookCreate() {
  const history = useHistory();
  function onCreate(newBook) {
    history.push(generatePath(BOOK_DETAIL, {id: newBook.id}));
  }
  return <BookForm onCreate={onCreate} />;
}

export default BookCreate;

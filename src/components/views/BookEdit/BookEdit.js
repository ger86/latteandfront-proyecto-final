import React from 'react';
import {generatePath, useHistory, useParams} from 'react-router-dom';
import BookForm from 'components/common/book/BookForm';
import {BOOK_DETAIL} from 'config/router/paths';
import useBook from 'hooks/useBook';

function BookEdit() {
  const params = useParams();
  const history = useHistory();
  const {
    data: book,
    isLoading: bookAreLoading,
    isFailed: getBookFailed
  } = useBook(params.id);

  if (bookAreLoading) {
    return 'Cargando';
  };

  if (getBookFailed) {
    return 'Fallo';
  };

  function onCreate(newBook) {
    history.push(generatePath(BOOK_DETAIL, {id: newBook.id}));
  }

  return (
    <BookForm book={book} onCreate={onCreate} />
  );
}

export default BookEdit;
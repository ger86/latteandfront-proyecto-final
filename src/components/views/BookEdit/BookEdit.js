import React from 'react';
import {useParams} from 'react-router-dom';
import BookForm from 'components/common/book/BookForm';
import useBook from 'hooks/useBook';

function BookEdit() {
  const params = useParams();
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
  return (
    <BookForm book={book} />
  );
}

export default BookEdit;
import React, {useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {BACKEND} from 'consts/backend';
import {BOOKS} from 'config/router/paths';
import apiClient from 'utils/apiClient';
import useBook from 'hooks/useBook';
import BookDeleteView from './BookDeleteView';

function BookDelete() {
  const {id: bookId} = useParams();
  const history = useHistory();
  const [isDeleting, setIsDeleting] = useState(false);
  const {data: book, isLoading: bookAreLoading, isFailed: getBookFailed} = useBook(bookId);

  if (bookAreLoading) {
    return 'Cargando';
  }

  if (getBookFailed) {
    return 'Fallo';
  }

  async function deleteBook(event) {
    event.preventDefault();
    setIsDeleting(true);
    try {
      const url = book ? `${BACKEND}/books/${book.id}` : `${BACKEND}/books`;
      await apiClient.delete(url);
      history.push(BOOKS);
    } catch (error) {
      console.log(error);
    }
  }

  return <BookDeleteView onSubmit={deleteBook} isDeleting={isDeleting} book={book} />;
}

export default BookDelete;

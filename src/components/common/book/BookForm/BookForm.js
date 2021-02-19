import React, {useState} from 'react';
import {generatePath, useHistory} from 'react-router-dom';
import {BACKEND} from 'consts/backend';
import {BOOK_DETAIL} from 'config/router/paths';
import useCategories from 'hooks/useCategories';
import useAuthors from 'hooks/useAuthors';
import bookPropTypes from 'propTypes/book';
import apiClient from 'utils/apiClient';
import blobToBase64 from 'utils/blobToBase64';
import {formatDateToBackendFormat} from 'utils/dateUtils';
import BookFormView from './BookFormView';
import prepareCategories from './utils/prepareCategories';

function BookForm({book}) {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);
  const [readAt, setReadAt] = useState(book && book.readAt ? new Date(book.readAt) : null);
  const [title, setTitle] = useState(book ? book.title : '');
  const [description, setDescription] = useState(book ? book.description ?? '' : '');
  const [score, setScore] = useState(book ? book.score ?? 0 : 0);
  const [image, setImage] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(book ? book.categories : []);
  const [selectedAuthors, setSelectedAuthors] = useState(book ? book.authors : []);
  const history = useHistory();

  const {
    data: categories,
    isLoading: categoriesAreLoading,
    isFailed: getCategoriesFailed
  } = useCategories();

  const {data: authors, isLoading: authorsAreLoading, isFailed: getAuthorsFailed} = useAuthors();

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function handleScoreChange(value) {
    setScore(value);
  }

  function handleReadAtChange(value) {
    setReadAt(value);
  }

  function handleImageChange(event) {
    setImage(event.target.files[0]);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (title.length === 0) {
      setError(new Error('El título no puede estar vacío'));
      return;
    }
    try {
      setIsSending(true);
      const base64Image = await blobToBase64(image);
      const data = {
        title,
        description,
        base64Image,
        score,
        readAt: formatDateToBackendFormat(readAt),
        categories: prepareCategories(book ? book.categories : [], selectedCategories),
        authors: prepareCategories(book ? book.authors : [], selectedAuthors)
      };
      const url = book ? `${BACKEND}/books/${book.id}` : `${BACKEND}/books`;
      const newBook = await apiClient.post(url, JSON.stringify(data));
      history.push(generatePath(BOOK_DETAIL, {id: newBook.id}));
    } catch (error) {
      setIsSending(false);
      setError(error);
    }
  }

  if (categoriesAreLoading || authorsAreLoading) {
    return <div>Cargando información</div>;
  }

  if (getCategoriesFailed || getAuthorsFailed) {
    return <div>¡Vaya! Un error ocurrió</div>;
  }

  let imageUrl = null;
  if (image) {
    imageUrl = URL.createObjectURL(image);
  } else if (book) {
    imageUrl = book.image;
  } else {
    imageUrl = null;
  }

  return (
    <BookFormView
      imageUrl={imageUrl}
      title={title}
      handleTitleChange={handleTitleChange}
      description={description}
      handleDescriptionChange={handleDescriptionChange}
      readAt={readAt}
      handleReadAtChange={handleReadAtChange}
      score={score}
      handleScoreChange={handleScoreChange}
      categories={categories}
      handleCategoriesChange={setSelectedCategories}
      initialCategories={selectedCategories}
      authors={authors}
      handleAuthorsChange={setSelectedAuthors}
      initialAuthors={selectedAuthors}
      handleImageChange={handleImageChange}
      handleSubmit={handleSubmit}
      isSending={isSending}
      error={error}
    />
  );
}

BookForm.propTypes = {
  book: bookPropTypes
};

export default BookForm;

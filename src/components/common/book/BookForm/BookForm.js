import React, {useState} from 'react';
import {generatePath, useHistory} from 'react-router-dom';
import {BACKEND} from 'consts/backend';
import {BOOK_DETAIL} from 'config/router/paths';
import useCategories from 'hooks/useCategories';
import bookPropTypes from 'propTypes/book';
import apiClient from 'utils/apiClient';
import blobToBase64 from 'utils/blobToBase64';
import BookFormView from './BookFormView';
import prepareCategories from './utils/prepareCategories';

function BookForm({book}) {
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState(book ? book.title : '');
  const [image, setImage] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(book?.categories);
  const history = useHistory();

  const {
    data: categories,
    isLoading: categoriesAreLoading,
    isFailed: getCategoriesFailed
  } = useCategories();

  function handleTitleChange(event) {
    setTitle(event.target.value);
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
        title: title,
        base64Image: base64Image,
        categories: prepareCategories(book.categories, selectedCategories)
      };
      const url = book ? `${BACKEND}/books/${book.id}` : `${BACKEND}/books`;
      const newBook = await apiClient.post(url, JSON.stringify(data));
      history.push(generatePath(BOOK_DETAIL, {id: newBook.id}));
    } catch (error) {
      setIsSending(false);
      setError(error);
    }
  }

  if (categoriesAreLoading) {
    return <div>Cargando información</div>;
  }

  if (getCategoriesFailed) {
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
      categories={categories}
      setSelectedCategories={setSelectedCategories}
      selectedCategories={selectedCategories}
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

import React, {useState} from 'react';
import Select from 'react-select';
import ResponsiveImage from 'components/ui/ResponsiveImage';
import {BACKEND} from 'consts/backend';
import useCategories from 'hooks/useCategories';
import bookPropTypes from 'propTypes/book';
import apiClient from 'utils/apiClient';
import blobToBase64 from 'utils/blobToBase64';

function BookForm({book}) {
  const [title, setTitle] = useState(book?.title);
  const [image, setImage] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState(book?.categories);

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
    try {
      const base64Image = await blobToBase64(image);
      const data = {
        title: title,
        base64Image: base64Image,
        categories: selectedCategories
      };
      const url = book ? `${BACKEND}/books/${book.id}` : `${BACKEND}/books`;
      await apiClient.post(url, JSON.stringify(data));
    } catch (error) {
      console.log(error);
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
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <p>
            <label className="form-label">Título</label>
          </p>
          <div>
            <input
              className="form-control"
              type="text"
              value={title}
              onChange={handleTitleChange}
              name="title"
            />
          </div>
        </div>
        <div className="form-group">
          <p>
            <label className="form-label">Imagen</label>
          </p>
          <div>
            <input className="form-control" type="file" onChange={handleImageChange} name="image" />
          </div>
          {imageUrl && (
            <div>
              <ResponsiveImage src={imageUrl} />
            </div>
          )}
        </div>
        <div className="form-group">
          <p>
            <label className="form-label">Categorías</label>
          </p>
          <div>
            <Select
              defaultValue={selectedCategories}
              onChange={setSelectedCategories}
              options={categories}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.id}
              isMulti
            />
          </div>
        </div>
        <button type="submit" className="btn">
          Añadir libro
        </button>
      </form>
    </div>
  );
}

BookForm.propTypes = {
  book: bookPropTypes
};

export default BookForm;

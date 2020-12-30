import React, {useState} from 'react';
import ResponsiveImage from 'components/ui/ResponsiveImage';
import {BACKEND} from 'consts/backend';
import apiClient from 'utils/apiClient';
import blobToBase64 from 'utils/blobToBase64';
import 'styles/css/form.css';
import './style.css';

function BookCreate() {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);

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
        base64Image: base64Image
      };
      const response = await apiClient.post(`${BACKEND}/books`, JSON.stringify(data));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  const imageUrl = image ? URL.createObjectURL(image) : '';

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
          {image && (
            <div>
              <ResponsiveImage src={imageUrl} />
            </div>
          )}
        </div>
        <button type="submit" className="btn">
          Añadir libro
        </button>
      </form>
    </div>
  );
}

export default BookCreate;

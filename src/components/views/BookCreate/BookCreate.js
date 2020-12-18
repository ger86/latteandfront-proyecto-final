import React, {useState} from 'react';
import {BACKEND} from 'consts/backend';
import apiClient from 'utils/apiClient';
import 'styles/css/form.css';
import './style.css';

function BookCreate() {
  const [title, setTitle] = useState('');

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const data = {
        title: title
      };
      const response = await apiClient.post(`${BACKEND}/books`, JSON.stringify(data));
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <p>
            <label className="form-label">Título</label>
          </p>
          <div>
            <input className="form-control" type="text" value={title} onChange={handleTitleChange} name="title" />
          </div>
        </div>
        <button type="submit" className="btn">Añadir libro</button>
      </form>
    </div>
  );
}

export default BookCreate;

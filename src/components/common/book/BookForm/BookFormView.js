import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import FormGroup from 'components/ui/form/FormGroup';
import Error from 'components/ui/form/Error';
import FormLabel from 'components/ui/form/FormLabel';
import ImageFieldPreview from 'components/ui/form/ImageFieldPreview';
import {PrimaryButton} from 'components/ui/Button';
import Input from 'components/ui/form/Input';
import categoryPropTypes from 'propTypes/category';

function BookFormView({
  handleSubmit,
  title,
  handleTitleChange,
  handleImageChange,
  imageUrl,
  selectedCategories,
  categories,
  setSelectedCategories,
  isSending,
  error
}) {
  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel>Título</FormLabel>
        <Input type="text" value={title} onChange={handleTitleChange} name="title" />
      </FormGroup>
      <ImageFieldPreview label="Portada" onSelectImage={handleImageChange} imageUrl={imageUrl} />
      <FormGroup>
        <FormLabel>Categorías</FormLabel>
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
      </FormGroup>
      <PrimaryButton type="submit" disabled={isSending}>
        {isSending ? 'Enviando' : 'Enviar'}
      </PrimaryButton>
      {error && <Error mt={1}>{error.message}</Error>}
    </form>
  );
}

BookFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  imageUrl: PropTypes.string,
  handleImageChange: PropTypes.func.isRequired,
  selectedCategories: PropTypes.arrayOf(categoryPropTypes),
  categories: PropTypes.arrayOf(categoryPropTypes).isRequired,
  setSelectedCategories: PropTypes.func.isRequired,
  isSending: PropTypes.bool.isRequired,
  error: PropTypes.object
};

export default BookFormView;

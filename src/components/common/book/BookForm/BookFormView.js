import React, {useMemo, useCallback} from 'react';
import PropTypes from 'prop-types';
import CreatableSelect from 'react-select/creatable';
import DatePicker from 'react-date-picker';
import FormGroup from 'components/ui/form/FormGroup';
import Error from 'components/ui/form/Error';
import FormLabel from 'components/ui/form/FormLabel';
import ImageFieldPreview from 'components/ui/form/ImageFieldPreview';
import {PrimaryButton} from 'components/ui/Button';
import Input from 'components/ui/form/Input';
import Textarea from 'components/ui/form/Textarea';
import StarsInput from 'components/common/form/StarsInput';
import categoryPropTypes from 'propTypes/category';
import authorPropTypes from 'propTypes/author';
import convertToSelectOption from 'utils/convertToSelectOption';

const formatCreateLabel = (inputValue) => `Añadir ${inputValue}`;

function BookFormView({
  handleSubmit,
  title,
  handleTitleChange,
  description,
  handleDescriptionChange,
  readAt,
  handleReadAtChange,
  score,
  handleScoreChange,
  handleImageChange,
  imageUrl,
  handleCategoriesChange,
  initialCategories,
  categories,
  handleAuthorsChange,
  initialAuthors,
  authors,
  isSending,
  error
}) {
  const categoriesOptions = useMemo(
    () => categories.map((category) => convertToSelectOption(category, 'name', 'id')),
    [categories]
  );
  const defaultCategories = useMemo(
    () => initialCategories.map((category) => convertToSelectOption(category, 'name', 'id')),
    [initialCategories]
  );

  const authorsOptions = useMemo(
    () => authors.map((author) => convertToSelectOption(author, 'name', 'id')),
    [authors]
  );
  const defaultAuthors = useMemo(
    () => initialAuthors.map((author) => convertToSelectOption(author, 'name', 'id')),
    [initialAuthors]
  );

  const onChangeCategories = useCallback(
    function (newSelectedCategories, action) {
      if (action.action === 'select-option') {
        handleCategoriesChange(
          newSelectedCategories.map((category) => ({
            id: category.value,
            name: category.label
          }))
        );
      } else if (action.action === 'create-option') {
        handleCategoriesChange(
          newSelectedCategories.map((category) => ({
            id: category.__isNew__ ? null : category.value,
            name: category.label
          }))
        );
      }
    },
    [handleCategoriesChange]
  );

  const onChangeAuthors = useCallback(
    function (newSelectedAuthors, action) {
      if (action.action === 'select-option') {
        handleAuthorsChange(
          newSelectedAuthors.map((author) => ({
            id: author.value,
            name: author.label
          }))
        );
      } else if (action.action === 'create-option') {
        handleAuthorsChange(
          newSelectedAuthors.map((author) => ({
            id: author.__isNew__ ? null : author.value,
            name: author.label
          }))
        );
      }
    },
    [handleAuthorsChange]
  );

  return (
    <form onSubmit={handleSubmit}>
      <FormGroup>
        <FormLabel>Título</FormLabel>
        <Input type="text" value={title} onChange={handleTitleChange} name="title" />
      </FormGroup>
      <FormGroup>
        <FormLabel>Descripción</FormLabel>
        <Textarea value={description} onChange={handleDescriptionChange} name="title" rows={6} />
      </FormGroup>
      <FormGroup>
        <FormLabel>Fecha de finalización</FormLabel>
        <div>
          <DatePicker onChange={handleReadAtChange} value={readAt} />
        </div>
      </FormGroup>
      <FormGroup>
        <FormLabel>Puntuación</FormLabel>
        <StarsInput value={score} onChange={handleScoreChange} />
      </FormGroup>
      <ImageFieldPreview label="Portada" onSelectImage={handleImageChange} imageUrl={imageUrl} />
      <FormGroup>
        <FormLabel>Categorías</FormLabel>
        <div>
          <CreatableSelect
            onChange={onChangeCategories}
            defaultValue={defaultCategories}
            formatCreateLabel={formatCreateLabel}
            options={categoriesOptions}
            isMulti
          />
        </div>
      </FormGroup>
      <FormGroup>
        <FormLabel>Autores</FormLabel>
        <div>
          <CreatableSelect
            onChange={onChangeAuthors}
            defaultValue={defaultAuthors}
            formatCreateLabel={formatCreateLabel}
            options={authorsOptions}
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
  description: PropTypes.string.isRequired,
  handleDescriptionChange: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  handleScoreChange: PropTypes.func.isRequired,
  readAt: PropTypes.object.isRequired,
  handleReadAtChange: PropTypes.func.isRequired,
  imageUrl: PropTypes.string,
  handleImageChange: PropTypes.func.isRequired,
  initialCategories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  ).isRequired,
  categories: PropTypes.arrayOf(categoryPropTypes).isRequired,
  handleCategoriesChange: PropTypes.func.isRequired,
  initialAuthors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  ).isRequired,
  authors: PropTypes.arrayOf(authorPropTypes).isRequired,
  handleAuthorsChange: PropTypes.func.isRequired,
  isSending: PropTypes.bool.isRequired,
  error: PropTypes.object
};

export default BookFormView;

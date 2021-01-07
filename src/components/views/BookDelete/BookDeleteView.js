import React from 'react';
import PropTypes from 'prop-types';
import {Link, generatePath} from 'react-router-dom';
import FlexContainer from 'components/ui/FlexContainer';
import {DangerButton} from 'components/ui/Button';
import Typography from 'components/ui/Typography';
import {BOOK_DETAIL} from 'config/router/paths';
import bookPropTypes from 'propTypes/book';

BookDeleteView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  book: bookPropTypes.isRequired,
  isDeleting: PropTypes.bool.isRequired
};

function BookDeleteView({onSubmit, book, isDeleting}) {
  return (
    <form onSubmit={onSubmit}>
      <Typography>¿Estás seguro de que deseas eliminar de tu biblioteca el libro {book.title}?</Typography>
      <FlexContainer withGutter>
        <Link to={generatePath(BOOK_DETAIL, {id: book.id})}>Atrás</Link>
        <DangerButton type="submit" disabled={isDeleting}>
          {isDeleting ? 'Eliminando' : 'Eliminar'}
        </DangerButton>
      </FlexContainer>
    </form>
  );
}

export default BookDeleteView;

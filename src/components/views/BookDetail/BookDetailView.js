import React from 'react';
import styled from 'styled-components';
import {Link, generatePath} from 'react-router-dom';
import FlexContainer from 'components/ui/FlexContainer';
import {BOOK_DELETE, BOOK_EDIT} from 'config/router/paths';
import bookPropTypes from 'propTypes/book';
import BookItem from 'components/common/book/BookItem';

BookDetailView.propTypes = {
  book: bookPropTypes.isRequired
};

const StyledLink = styled(Link)`
  display: block;
  padding: 1rem;
`;

function BookDetailView({book}) {
  return (
    <>
      <BookItem book={book} />
      <FlexContainer>
        <StyledLink to={generatePath(BOOK_EDIT, {id: book.id})}>Editar</StyledLink>
        <StyledLink to={generatePath(BOOK_DELETE, {id: book.id})}>Eliminar</StyledLink>
      </FlexContainer>
    </>
  );
}

export default BookDetailView;

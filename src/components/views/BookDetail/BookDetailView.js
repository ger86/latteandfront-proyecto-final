import React from 'react';
import styled from 'styled-components';
import {Link, generatePath} from 'react-router-dom';
import FlexContainer from 'components/ui/FlexContainer';
import Box from 'components/ui/Box';
import Stars from 'components/ui/Stars';
import ResponsiveImage from 'components/ui/ResponsiveImage';
import {BOOK_DELETE, BOOK_EDIT} from 'config/router/paths';
import bookPropTypes from 'propTypes/book';
import Categories from 'components/common/book/Categories';
import Authors from 'components/common/book/Authors';
import {formatDate} from 'utils/dateUtils';
import {ImageWrapper} from './styledComponents';

BookDetailView.propTypes = {
  book: bookPropTypes.isRequired
};

const StyledLink = styled(Link)`
  display: block;
  padding: 1rem;
`;

function BookDetailView({book}) {
  return (
    <article>
      <FlexContainer alignItems="flex-start">
        {book.image && (
          <ImageWrapper>
            <ResponsiveImage src={book.image} alt={book.title} />
          </ImageWrapper>
        )}
        <div>
          <h3>{book.title}</h3>
          {book.description && <Box marginBottom={1}>{book.description}</Box>}
          {book.score && (
            <Box marginBottom={1}>
              <Stars stars={book.score} />
            </Box>
          )}
          {book.readAt && (
            <Box marginBottom={1}>
              <p>
                <strong>Fecha de lectura:</strong> {formatDate(book.readAt)}
              </p>
            </Box>
          )}
          <Authors book={book} />
          <Categories book={book} />
        </div>
      </FlexContainer>
      <FlexContainer>
        <StyledLink to={generatePath(BOOK_EDIT, {id: book.id})}>Editar</StyledLink>
        <StyledLink to={generatePath(BOOK_DELETE, {id: book.id})}>Eliminar</StyledLink>
      </FlexContainer>
    </article>
  );
}

export default BookDetailView;

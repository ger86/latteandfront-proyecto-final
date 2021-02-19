import React from 'react';
import {generatePath} from 'react-router-dom';
import Card from 'components/ui/Card';
import Box from 'components/ui/Box';
import Stars from 'components/ui/Stars';
import Categories from 'components/common/book/Categories';
import Authors from 'components/common/book/Authors';
import {BOOK_DETAIL} from 'config/router/paths';
import bookPropTypes from 'propTypes/book';

function BookItem({book}) {
  return (
    <Card
      title={book.title}
      image={book.image}
      footer={() => (
        <>
          {' '}
          {book.score && (
            <Box marginBottom={1}>
              <Stars stars={book.score} />
            </Box>
          )}
          <Authors book={book} />
          <Categories book={book} />
        </>
      )}
      to={generatePath(BOOK_DETAIL, {id: book.id})}
    />
  );
}

BookItem.propTypes = {
  book: bookPropTypes.isRequired
};

export default BookItem;

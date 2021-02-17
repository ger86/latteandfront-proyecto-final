import React from 'react';
import {generatePath} from 'react-router-dom';
import Card from 'components/ui/Card';
import {BOOK_DETAIL} from 'config/router/paths';
import bookPropTypes from 'propTypes/book';
import Categories from './components/Categories';
import Authors from './components/Authors';

function BookItem({book}) {
  return (
    <Card
      title={book.title}
      image={book.image}
      footer={() => (
        <>
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

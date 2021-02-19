import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from 'components/ui/FlexContainer';
import authorPropTypes from 'propTypes/author';
import bookPropTypes from 'propTypes/book';
import categoryPropTypes from 'propTypes/category';
import FilterSelector from './components/FilterSelector';
import BookItem from './components/BookItem';

function BooksView({
  categories,
  handleCategoryChange,
  currentCategoryId,
  books,
  authors,
  handleAuthorChange,
  currentAuthorId
}) {
  return (
    <>
      <FlexContainer justifyContent="flex-end">
        <FilterSelector
          elements={categories}
          onChange={handleCategoryChange}
          value={currentCategoryId}
        />
        <FilterSelector elements={authors} onChange={handleAuthorChange} value={currentAuthorId} />
      </FlexContainer>
      <div>
        {books.map((book) => (
          <BookItem book={book} key={book.id} />
        ))}
      </div>
    </>
  );
}

BooksView.propTypes = {
  categories: PropTypes.arrayOf(categoryPropTypes).isRequired,
  handleCategoryChange: PropTypes.func.isRequired,
  currentCategoryId: PropTypes.string.isRequired,
  authors: PropTypes.arrayOf(authorPropTypes).isRequired,
  handleAuthorChange: PropTypes.func.isRequired,
  currentAuthorId: PropTypes.string.isRequired,
  books: PropTypes.arrayOf(bookPropTypes).isRequired
};

export default BooksView;

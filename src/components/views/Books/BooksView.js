import React from 'react';
import PropTypes from 'prop-types';
import FlexContainer from 'components/ui/FlexContainer';
import BookItem from 'components/common/book/BookItem';
import bookPropTypes from 'propTypes/book';
import categoryPropTypes from 'propTypes/category';
import CategorySelector from './components/CategorySelector';

function BooksView({categories, handleCategoryChange, currentCategoryId, books}) {
  return (
    <>
      <FlexContainer justifyContent="flex-end">
        <CategorySelector
          categories={categories}
          onChangeCategory={handleCategoryChange}
          currentCategoryId={currentCategoryId}
        />
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
  currentCategoryId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  books: PropTypes.arrayOf(bookPropTypes).isRequired
};

export default BooksView;

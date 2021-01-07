import React, {useState, useMemo} from 'react';
import useCategories from 'hooks/useCategories';
import useBooks from './hooks/useBooks';
import BooksView from './BooksView';

function Books() {
  const [currentCategoryId, setCurrentCategoryId] = useState(-1);
  const {data: books, isLoading: booksAreLoading, isFailed: getBooksFailed} = useBooks();
  const {
    data: categories,
    isLoading: categoriesAreLoading,
    isFailed: getCategoriesFailed
  } = useCategories();

  const booksToShow = useMemo(
    function () {
      if (!books) {
        return null;
      }
      if (currentCategoryId > -1) {
        return books.filter((book) => {
          return book.categories.some((cat) => cat.id === parseInt(currentCategoryId));
        });
      } else {
        return books;
      }
    },
    [books, currentCategoryId]
  );

  const handleCategoryChange = (event) => {
    setCurrentCategoryId(event.target.value);
  };

  if (booksAreLoading || categoriesAreLoading) {
    return <div>Cargando información</div>;
  }

  if (getBooksFailed || getCategoriesFailed) {
    return <div>¡Vaya! Un error ocurrió</div>;
  }

  return (
    <BooksView
      books={booksToShow}
      handleCategoryChange={handleCategoryChange}
      currentCategoryId={currentCategoryId}
      categories={categories}
    />
  );
}

export default Books;

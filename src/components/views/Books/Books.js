import React, {useState, useMemo} from 'react';
import useCategories from 'hooks/useCategories';
import useBooks from './hooks/useBooks';
import useAuthors from 'hooks/useAuthors';
import BooksView from './BooksView';

function Books() {
  const [currentCategoryId, setCurrentCategoryId] = useState('');
  const [currentAuthorId, setCurrentAuthorId] = useState('');
  const {data: books, isLoading: booksAreLoading, isFailed: getBooksFailed} = useBooks();
  const {
    data: categories,
    isLoading: categoriesAreLoading,
    isFailed: getCategoriesFailed
  } = useCategories();

  const {data: authors, isLoading: authorsAreLoading, isFailed: getAuthorsFailed} = useAuthors();

  const booksToShow = useMemo(
    function () {
      if (!books) {
        return null;
      }
      console.log(currentAuthorId);
      console.log(currentCategoryId);

      if (currentCategoryId !== '' || currentAuthorId !== '') {
        return books.filter((book) => {
          const hasCategory =
            currentCategoryId === ''
              ? true
              : book.categories.some((cat) => cat.id === currentCategoryId);
          const hasAuthor =
            currentAuthorId === ''
              ? true
              : book.authors.some((author) => author.id === currentAuthorId);
          return hasCategory && hasAuthor;
        });
      } else {
        return books;
      }
    },
    [books, currentCategoryId, currentAuthorId]
  );

  const handleCategoryChange = (event) => {
    setCurrentCategoryId(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setCurrentAuthorId(event.target.value);
  };

  if (booksAreLoading || categoriesAreLoading || authorsAreLoading) {
    return <div>Cargando información</div>;
  }

  if (getBooksFailed || getCategoriesFailed || getAuthorsFailed) {
    return <div>¡Vaya! Un error ocurrió</div>;
  }

  return (
    <BooksView
      books={booksToShow}
      handleCategoryChange={handleCategoryChange}
      currentCategoryId={currentCategoryId}
      categories={categories}
      handleAuthorChange={handleAuthorChange}
      currentAuthorId={currentAuthorId}
      authors={authors}
    />
  );
}

export default Books;

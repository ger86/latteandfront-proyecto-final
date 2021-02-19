import React from 'react';
import useAuthors from 'hooks/useAuthors';
import AuthorsView from './AuthorsView';

function Authors() {
  const {
    data: authors,
    isLoading: authorsAreLoading,
    isFailed: getAuthorsFailed
  } = useAuthors();

  if (authorsAreLoading) {
    return <div>Cargando autores</div>;
  }

  if (getAuthorsFailed) {
    return <div>¡Vaya! Un error ocurrió</div>;
  }

  return <AuthorsView authors={authors} />;
}

export default Authors;

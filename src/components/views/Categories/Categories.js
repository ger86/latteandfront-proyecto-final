import React from 'react';
import useCategories from 'hooks/useCategories';
import CategoriesView from './CategoriesView';

function Categories() {
  const {
    data: categories,
    isLoading: categoriesAreLoading,
    isFailed: getCategoriesFailed
  } = useCategories();

  if (categoriesAreLoading) {
    return <div>Cargando categorías</div>;
  }

  if (getCategoriesFailed) {
    return <div>¡Vaya! Un error ocurrió</div>;
  }

  return <CategoriesView categories={categories} />;
}

export default Categories;

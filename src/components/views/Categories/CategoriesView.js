import React from 'react';
import PropTypes from 'prop-types';
import categoryPropTypes from 'propTypes/category';

CategoriesView.propTypes = {
  categories: PropTypes.arrayOf(categoryPropTypes).isRequired
};

function CategoriesView({categories}) {
  return (
    <div>
      <h1>Categorías</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoriesView;

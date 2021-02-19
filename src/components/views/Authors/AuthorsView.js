import React from 'react';
import PropTypes from 'prop-types';
import authorPropTypes from 'propTypes/author';

AuthorsView.propTypes = {
  authors: PropTypes.arrayOf(authorPropTypes).isRequired
};

function AuthorsView({authors}) {
  return (
    <div>
      <h1>Autores</h1>
      <ul>
        {authors.map((author) => (
          <li key={author.id}>{author.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AuthorsView;

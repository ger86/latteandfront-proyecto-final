import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

Stars.propTypes = {
  stars: PropTypes.oneOf([1, 2, 3, 4, 5]).isRequired
};

const Star = styled.span`
  padding: 1rem;
  font-size: 1.5rem;
  height: 4rem;
  background: none;
  border: none;
  appearance: none;
  outline: 0;
}
`;

function Stars({stars}) {
  const array = [...Array(stars).keys()];
  return (
    <div>
      {array.map((v) => (
        <Star key={v} role="img" aria-label="star">
          ⭐
        </Star>
      ))}
    </div>
  );
}

export default Stars;

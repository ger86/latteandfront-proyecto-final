import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import oneToNArray from 'utils/oneToNArray';

StarsInput.propTypes = {
  max: PropTypes.number,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

StarsInput.defaultProps = {
  max: 5
};

const Button = styled.button`
  padding: 1rem;
  font-size: 1.5rem;
  height: 4rem;
  background: none;
  border: none;
  appearance: none;
  outline: 0;
}
`;

function StarsInput({onChange, value, max}) {
  const currentStars = oneToNArray(value);
  const emptyStars = oneToNArray(max - value);

  if (value > max) {
    throw new Error(`Value <${value}> cannot be greater thant max <${max}>`);
  }

  function onClick(event, value) {
    event.preventDefault();
    onChange(value);
  }

  return (
    <div>
      {currentStars.map((v, index) => (
        <Button key={v} onClick={(event) => onClick(event, index + 1)}>
          <span role="img" aria-label="star">
            ⭐
          </span>
        </Button>
      ))}
      {emptyStars.map((v, index) => (
        <Button key={v} onClick={(event) => onClick(event, index + 1 + value)}>
          <span role="img" aria-label="empty star">
            ☆
          </span>
        </Button>
      ))}
    </div>
  );
}

export default StarsInput;

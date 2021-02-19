import React from 'react';
import PropTypes from 'prop-types';

function FilterSelector({elements, onChange, value}) {
  return (
    <form>
      <select onChange={onChange} value={value}>
        <option value="">Todo</option>
        {elements.map((element) => (
          <option value={element.id} key={element.id}>
            {element.name}
          </option>
        ))}
      </select>
    </form>
  );
}

FilterSelector.propTypes = {
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

FilterSelector.defaultProps = {
  value: 'all'
};

export default FilterSelector;

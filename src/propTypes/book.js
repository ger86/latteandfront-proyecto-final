import PropTypes from 'prop-types';
import categoryPropTypes from './category';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  categories: PropTypes.arrayOf(categoryPropTypes),
});

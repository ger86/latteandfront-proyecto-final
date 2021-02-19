import PropTypes from 'prop-types';
import categoryPropTypes from './category';
import authorsPropTypes from './author';

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  categories: PropTypes.arrayOf(categoryPropTypes),
  authors: PropTypes.arrayOf(authorsPropTypes),
  description: PropTypes.string,
  readAt: PropTypes.string,
  score: PropTypes.number
});

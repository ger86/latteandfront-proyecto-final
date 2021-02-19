import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import ResponsiveImage from 'components/ui/ResponsiveImage';
import {CardWrapper, CardInner, ImageWrapper, Title} from './styledComponents';

function Card({image, title, to, footer: Footer}) {
  return (
    <CardWrapper>
      <CardInner>
        {image && (
          <ImageWrapper>
            <ResponsiveImage src={image} alt={title} />
          </ImageWrapper>
        )}
        <div>
          <Title>{to ? <Link to={to}>{title}</Link> : {title}}</Title>
          {Footer && <Footer />}
        </div>
      </CardInner>
    </CardWrapper>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  to: PropTypes.string,
  footer: PropTypes.oneOfType([PropTypes.func, PropTypes.node])
};

Card.defaultProps = {
  title: 'Título por defecto',
  image: null,
  to: null,
  footer: null
};

export default Card;

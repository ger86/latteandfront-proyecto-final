import React from 'react';
import FlexContainer from 'components/ui/FlexContainer';
import Badge from 'components/ui/Badge';
import Box from 'components/ui/Box';
import bookPropTypes from 'propTypes/book';

function Categories({book}) {
  return (
    <FlexContainer justifyContent="flex-start">
      {book.categories.map((category) => (
        <Box key={`category--${category.id}`} marginRight={1}>
          <Badge>{category.name}</Badge>
        </Box>
      ))}
    </FlexContainer>
  );
}

Categories.propTypes = {
  book: bookPropTypes.isRequired
};

export default Categories;

import React from 'react';
import FlexContainer from 'components/ui/FlexContainer';
import Badge from 'components/ui/Badge';
import Box from 'components/ui/Box';
import bookPropTypes from 'propTypes/book';

function Authors({book}) {
  return (
    <FlexContainer justifyContent="flex-start" withGutter>
      {book.authors.map((author) => (
        <Box key={`author--${author.id}`} marginRight={1}>
          <Badge>{author.name}</Badge>
        </Box>
      ))}
    </FlexContainer>
  );
}

Authors.propTypes = {
  book: bookPropTypes.isRequired
};

export default Authors;

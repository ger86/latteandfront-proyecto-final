import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ResponsiveImage from 'components/ui/ResponsiveImage';
import FormGroup from 'components/ui/form/FormGroup';
import FormLabel from 'components/ui/form/FormLabel';
import Input from 'components/ui/form/Input';

ImagePreview.propTypes = {
  imageUrl: PropTypes.string,
  onSelectImage: PropTypes.func.isRequired,
  label: PropTypes.string
};

const StyledFormGroup = styled(FormGroup)`
  display: flex;
`;

const ImageWrapper = styled.div`
  flex: 0 0 10%;
  margin-right: 2rem;
`;

const FieldWrapper = styled.div`
  flex: 0 0 90%;
`;

function ImagePreview({imageUrl, onSelectImage, label}) {
  return (
    <StyledFormGroup>
      {imageUrl && (
        <ImageWrapper>
          <ResponsiveImage src={imageUrl} />
        </ImageWrapper>
      )}
      <FieldWrapper>
        {label && <FormLabel>{label}</FormLabel>}
        <Input type="file" onChange={onSelectImage} name="image" />
      </FieldWrapper>
    </StyledFormGroup>
  );
}

export default ImagePreview;

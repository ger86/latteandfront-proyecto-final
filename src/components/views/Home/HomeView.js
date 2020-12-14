import React from 'react';
import PropTypes from 'prop-types';
import Box from 'components/ui/Box';
import FlexContainer from 'components/ui/FlexContainer';
import FormField from 'components/ui/form/FormField';
import Error from 'components/ui/form/Error';
import {PrimaryButton} from 'components/ui/Button';
import {Form} from './styledComponents';

function HomeView({onSubmit, magicWord, onMagicWordChanged, error}) {
  return (
    <FlexContainer justifyContent="center">
      <Form onSubmit={onSubmit}>
        <h4>¡Bienvenido a Librarify!</h4>
        <FormField
          inputType="password"
          name="magicWord"
          id="magicWord"
          label="Para acceder, introduce la palabra mágica"
          value={magicWord}
          onChangeInput={onMagicWordChanged}
        />
        <PrimaryButton type="submit" fullWidth>
          Acceder
        </PrimaryButton>
        {error && (
          <Box marginTop={1}>
            <Error>{error.message}</Error>
          </Box>
        )}
      </Form>
    </FlexContainer>
  );
}

HomeView.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  magicWord: PropTypes.string.isRequired,
  onMagicWordChanged: PropTypes.func.isRequired,
  error: PropTypes.object
};

HomeView.defaultProps = {
  error: null
};

export default HomeView;

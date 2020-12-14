import React from 'react';
import PropTypes from 'prop-types';
import FormGroup from './FormGroup';
import FormLabel from './FormLabel';
import Input from './Input';

FormField.propTypes = {
  label: PropTypes.string,
  inputType: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

FormField.defaultProps = {
  label: null,
  inputType: 'text'
};

function FormField({label, inputType, name, onChangeInput, id, value}) {
  return (
    <FormGroup>
      {label && <FormLabel htmlFor={id}>{label}</FormLabel>}
      <Input onChange={onChangeInput} id={id} name={name} type={inputType} value={value} />
    </FormGroup>
  );
}

export default FormField;

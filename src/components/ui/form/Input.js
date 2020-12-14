import styled from 'styled-components';

export default styled.input`
  display: block;
  width: 100%;
  padding: .375rem .75rem;
  font-size: ${props => props.theme.fontSize.body};
  font-weight: 400;
  line-height: 1.5;
  color: ${props => props.theme.fontColor.body};
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid ${props => props.theme.shape.borderColor};
  appearance: none;
  border-radius: ${props => props.theme.shape.bordeRadius};
  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`;
import styled from 'styled-components';

export default styled.span`
  display: inline-block;
  padding: 1rem;
  border-radius: ${(props) => props.theme.shape.borderRadius};
  background-color: ${(props) =>
    props.color ? props.theme[props.color].normal : props.theme.primary.normal};
  color: white;
  font-family: ${(props) => props.theme.fontFamily.primary};
  font-size: ${(props) => props.theme.fontSize.small};
`;

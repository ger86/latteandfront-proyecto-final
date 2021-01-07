import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: ${props => props.alignItems ?? 'center'};
  justify-content: ${props => props.justifyContent ?? 'flex-start'};

  & > * {
    margin-right: ${props => props.withGutter ? '1rem' : '0'};
  }
`;

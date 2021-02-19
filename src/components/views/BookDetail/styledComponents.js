import styled from 'styled-components';

export const ImageWrapper = styled.div`
  flex: 0 0 300px;
  max-width: 300px;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-right: 2rem;
  }
`;

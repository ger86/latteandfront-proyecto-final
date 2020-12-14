import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: block;
  padding: 1rem;
`;

export const CardInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-wrap: no-wrap;
  }
`;

export const ImageWrapper = styled.div`
  flex: 0 0 300px;
  max-width: 300px;
  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-right: 2rem;
  }
`;

export const Title = styled.h3`
  a {
    color: ${(props) => props.theme.fontColor.body};
    text-decoration: none;
  }
`;


import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    padding-left: 0
  }
`;

export const StyledNavLink = styled(NavLink)`
  margin-left: 0.5rem;
  text-decoration: none;
  color: ${props => props.theme.fontColor.body};

  &.active {
    font-weight: bold;
  }
`;

export const StyledButton = styled.button`
  margin-left: 0.5rem;
  text-decoration: none;
  color: ${props => props.theme.fontColor.body};
`;
 
import React from 'react';
import Container from 'components/ui/Container';
import useAuthContext from 'hooks/useAuthContext';
import Menu from './Menu';
import {Header as StyledHeader, Logo} from './styledComponents';
import logo from './logo.png';

export default function Header() {
  const {isAuthenticated} = useAuthContext();
  return (
    <Container>
      <StyledHeader>
        <Logo src={logo} alt="Librarify" />
        {isAuthenticated && <Menu />}
      </StyledHeader>
    </Container>
  );
}

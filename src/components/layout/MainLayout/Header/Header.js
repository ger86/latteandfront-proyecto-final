import React from 'react';
import {Link} from 'react-router-dom';
import Container from 'components/ui/Container';
import {BOOKS, HOME} from 'config/router/paths';
import useAuthContext from 'hooks/useAuthContext';
import Menu from './Menu';
import {Header as StyledHeader, Logo} from './styledComponents';
import logo from './logo.png';

export default function Header() {
  const {isAuthenticated} = useAuthContext();
  return (
    <Container>
      <StyledHeader>
        <Link to={isAuthenticated ? BOOKS : HOME}>
          <Logo src={logo} alt="Librarify" />
        </Link>
        {isAuthenticated && <Menu />}
      </StyledHeader>
    </Container>
  );
}

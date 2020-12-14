import React from 'react';
import {Navigation, StyledNavLink} from './styledComponents';
import {BOOKS, CATEGORIES, LOGOUT} from 'config/router/paths';

function Menu() {
  return (
    <Navigation>
      <ul>
        <li>
          <StyledNavLink to={BOOKS} activeClassName="active" exact>
            Libros
          </StyledNavLink>
          <StyledNavLink to={CATEGORIES} activeClassName="active" exact>
            Categorías
          </StyledNavLink>
          <StyledNavLink to={LOGOUT} activeClassName="active" exact>
            Cerrar sesión
          </StyledNavLink>
        </li>
      </ul>
    </Navigation>
  );
}

export default Menu;

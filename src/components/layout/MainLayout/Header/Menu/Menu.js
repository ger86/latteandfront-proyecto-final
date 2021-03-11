import React from 'react';
import {Navigation, StyledNavLink} from './styledComponents';
import {AUTHORS, BOOKS, CATEGORIES, LOGOUT, BOOK_CREATE, CATEGORY_CREATE} from 'config/router/paths';

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
          <StyledNavLink to={AUTHORS} activeClassName="active" exact>
            Autores
          </StyledNavLink>
          <StyledNavLink to={BOOK_CREATE} activeClassName="active" exact>
            Añadir libro
          </StyledNavLink>
          <StyledNavLink to={CATEGORY_CREATE} activeClassName="active" exact>
            Añadir categoría
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

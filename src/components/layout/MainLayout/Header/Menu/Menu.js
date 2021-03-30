import React, {useState} from 'react';
import Modal from 'components/ui/Modal';
import BookForm from 'components/common/book/BookForm';
import {
  AUTHORS,
  BOOKS,
  CATEGORIES,
  LOGOUT,
  CATEGORY_CREATE
} from 'config/router/paths';
import {Navigation, StyledNavLink, StyledButton} from './styledComponents';

function Menu() {
  const [isOpened, setOpened] = useState(false);

  const openModal = () => setOpened(true);
  const closeModal = () => setOpened(false);
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
          <StyledNavLink to={CATEGORY_CREATE} activeClassName="active" exact>
            Añadir categoría
          </StyledNavLink>
          <StyledButton onClick={openModal} exact>
            Añadir libro
          </StyledButton>
          <StyledNavLink to={LOGOUT} activeClassName="active" exact>
            Cerrar sesión
          </StyledNavLink>
        </li>
      </ul>
      <Modal isOpened={isOpened} onClose={closeModal} title="Añadir Libro">
        <BookForm />
      </Modal>
    </Navigation>
  );
}

export default Menu;

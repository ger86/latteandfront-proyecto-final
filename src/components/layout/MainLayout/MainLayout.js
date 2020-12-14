import React from 'react';
import PropTypes from 'prop-types';
import Container from 'components/ui/Container';
import Header from './Header';

export default function MainLayout({children}) {
  return (
    <main>
      <Header />
      <Container>{children}</Container>
    </main>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

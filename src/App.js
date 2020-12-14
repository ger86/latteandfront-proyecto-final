import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import MainLayout from 'components/layout/MainLayout';
import PrivateRoute from 'components/router/PrivateRoute';
import PublicRoute from 'components/router/PublicRoute';
import Home from 'components/views/Home';
import Logout from 'components/views/Logout';
import Books from 'components/views/Books';
import BookEdit from 'components/views/BookEdit';
import BookDetail from 'components/views/BookDetail';
import BookDelete from 'components/views/BookDelete';
import Categories from 'components/views/Categories';
import CategoryDetail from 'components/views/CategoryDetail';
import CategoryDelete from 'components/views/CategoryDelete';
import CategoryEdit from 'components/views/CategoryEdit';
import AuthProvider from 'contexts/auth';
import {
  HOME,
  LOGOUT,
  BOOKS,
  BOOK_DELETE,
  BOOK_EDIT,
  BOOK_DETAIL,
  CATEGORIES,
  CATEGORY_DELETE,
  CATEGORY_EDIT,
  CATEGORY_DETAIL
} from 'config/router/paths';
import theme from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <MainLayout>
            <Switch>
              <PublicRoute path={HOME} component={Home} exact />
              <PrivateRoute path={LOGOUT} component={Logout} exact />
              <PrivateRoute path={BOOKS} component={Books} exact />
              <PrivateRoute path={BOOK_DETAIL} component={BookDetail} exact />
              <PrivateRoute path={BOOK_EDIT} component={BookEdit} exact />
              <PrivateRoute path={BOOK_DELETE} component={BookDelete} exact />
              <PrivateRoute path={CATEGORIES} component={Categories} exact />
              <PrivateRoute path={CATEGORY_DETAIL} component={CategoryDetail} exact />
              <PrivateRoute path={CATEGORY_EDIT} component={CategoryEdit} exact />
              <PrivateRoute path={CATEGORY_DELETE} component={CategoryDelete} exact />
            </Switch>
          </MainLayout>
        </Router>
      </AuthProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

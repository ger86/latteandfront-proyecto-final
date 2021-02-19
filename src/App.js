import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import MainLayout from 'components/layout/MainLayout';
import PrivateRoute from 'components/router/PrivateRoute';
import PublicRoute from 'components/router/PublicRoute';
const Home = lazy(() => import('components/views/Home'));
const Logout = lazy(() => import('components/views/Logout'));
const Books = lazy(() => import('components/views/Books'));
const BookEdit = lazy(() => import('components/views/BookEdit'));
const BookCreate = lazy(() => import('components/views/BookCreate'));
const BookDetail = lazy(() => import('components/views/BookDetail'));
const BookDelete = lazy(() => import('components/views/BookDelete'));
const Categories = lazy(() => import('components/views/Categories'));
const Authors = lazy(() => import('components/views/Authors'));
const CategoryDetail = lazy(() => import('components/views/CategoryDetail'));
const CategoryDelete = lazy(() => import('components/views/CategoryDelete'));
const CategoryEdit = lazy(() => import('components/views/CategoryEdit'));
import AuthProvider from 'contexts/auth';
import {
  HOME,
  LOGOUT,
  BOOKS,
  BOOK_DELETE,
  BOOK_EDIT,
  BOOK_DETAIL,
  BOOK_CREATE,
  CATEGORIES,
  CATEGORY_DELETE,
  CATEGORY_EDIT,
  CATEGORY_DETAIL,
  AUTHORS
} from 'config/router/paths';
import theme from 'styles/theme';
import GlobalStyle from 'styles/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback="Cargando...">
        <AuthProvider>
          <Router>
            <MainLayout>
              <Switch>
                <PublicRoute path={HOME} component={Home} exact />
                <PrivateRoute path={LOGOUT} component={Logout} exact />
                <PrivateRoute path={BOOKS} component={Books} exact />
                <PrivateRoute path={BOOK_CREATE} component={BookCreate} exact />
                <PrivateRoute path={BOOK_DETAIL} component={BookDetail} exact />
                <PrivateRoute path={BOOK_EDIT} component={BookEdit} exact />
                <PrivateRoute path={BOOK_DELETE} component={BookDelete} exact />
                <PrivateRoute path={CATEGORIES} component={Categories} exact />
                <PrivateRoute path={CATEGORY_DETAIL} component={CategoryDetail} exact />
                <PrivateRoute path={CATEGORY_EDIT} component={CategoryEdit} exact />
                <PrivateRoute path={CATEGORY_DELETE} component={CategoryDelete} exact />
                <PrivateRoute path={AUTHORS} component={Authors} exact />
              </Switch>
            </MainLayout>
          </Router>
        </AuthProvider>
      </Suspense>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

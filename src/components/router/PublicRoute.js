import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import useAuthContext from 'hooks/useAuthContext';
import {BOOKS} from 'config/router/paths';

function PublicRoute({component: Component, ...rest}) {
  const {isAuthenticated} = useAuthContext();

  return (
    <Route
      {...rest}
      render={(props) => (isAuthenticated ? <Redirect to={BOOKS} /> : <Component {...props} />)}
    />
  );
}

PublicRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.element])
};

export default PublicRoute;


import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import useAuthContext from 'hooks/useAuthContext';
import {HOME} from 'config/router/paths';

function PrivateRoute({component: Component, ...rest}) {
  const {isAuthenticated} = useAuthContext();

  return (
    <Route
      {...rest}
      render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to={HOME} />)}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.element])
};

export default PrivateRoute;

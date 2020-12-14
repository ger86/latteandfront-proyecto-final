import React, {useEffect} from 'react';
import useAuthContext from 'hooks/useAuthContext';

function Logout() {
  const {logout} = useAuthContext();

  useEffect(() => logout(), [logout]);
  return <div>Cerrando sesión...</div>;
}

export default Logout;

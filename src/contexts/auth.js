/* eslint-disable react/prop-types */
import {createContext, useCallback, useMemo, useState} from 'react';
import localstorageUtils from 'utils/localStorageUtils';

const AUTH_KEY = 'LATTEANDFRONT_FINAL';

export const AuthContext = createContext();

export default function AuthProvider({children}) {
  const [magicWord, setMagicWord] = useState(localstorageUtils.getItem(AUTH_KEY));

  const isAuthenticated = Boolean(magicWord);

  const login = useCallback(
    function (magicWord) {
      localstorageUtils.setItem(AUTH_KEY, magicWord);
      setMagicWord(magicWord);
    },
    [setMagicWord]
  );

  const logout = useCallback(function () {
    localstorageUtils.removeItem(AUTH_KEY);
    setMagicWord(null);
  }, [setMagicWord]);

  const value = useMemo(
    () => ({
      isAuthenticated,
      login,
      logout
    }),
    [isAuthenticated, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

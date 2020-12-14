import React, {useState} from 'react';
import {MAGIC_WORD} from 'consts/app';
import useAuthContext from 'hooks/useAuthContext';
import HomeView from './HomeView';

function Home() {
  const [magicWord, setMagicWord] = useState('');
  const [error, setError] = useState(null);
  const {login} = useAuthContext();

  function handleMagicWordChange(event) {
    setMagicWord(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (magicWord !== MAGIC_WORD) {
      setError(new Error('😝 La palabara clave que has introducido no es la correcta'));
    } else {
      login(magicWord);
    }
  }

  return (
    <HomeView
      error={error}
      onSubmit={handleSubmit}
      magicWord={magicWord}
      onMagicWordChanged={handleMagicWordChange}
    />
  );
}

export default Home;

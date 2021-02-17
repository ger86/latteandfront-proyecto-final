import useFetch from 'hooks/useFetch';
import {BACKEND} from 'consts/backend';

export default function useAuthors() {
  return useFetch({
    url: `${BACKEND}/authors`,
    method: 'GET'
  });
}

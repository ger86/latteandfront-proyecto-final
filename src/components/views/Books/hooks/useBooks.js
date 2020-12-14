import useFetch from 'hooks/useFetch';
import {BACKEND} from 'consts/backend';

export default function useBooks() {
  return useFetch({
    url: `${BACKEND}/books`,
    method: 'GET',
  });
}

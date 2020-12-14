import useFetch from 'hooks/useFetch';
import {BACKEND} from 'consts/backend';

export default function useBook(id) {
  return useFetch({
    url: `${BACKEND}/books/${id}`,
    method: 'GET'
  });
}

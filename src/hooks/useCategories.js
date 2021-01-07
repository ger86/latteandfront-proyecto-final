import useFetch from 'hooks/useFetch';
import {BACKEND} from 'consts/backend';

export default function useCategories() {
  return useFetch({
    url: `${BACKEND}/categories`,
    method: 'GET'
  });
}

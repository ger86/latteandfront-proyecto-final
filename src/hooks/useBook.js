import useFetch from 'hooks/useFetch';
import {BACKEND} from 'consts/backend';

export default function useBooks(bookId) {
  return useFetch({
    url: `${BACKEND}/books/${bookId}`,
    method: 'GET',
  });
}

import {useEffect, useState} from 'react';
import apiClient from 'utils/apiClient';

export default function useFetch({url, method, body}) {
  const [fetchState, setFetchState] = useState({
    isLoading: true,
    isSuccess: false,
    isFailed: false,
    data: null,
    error: null
  });
  useEffect(
    function () {
      async function fetchData() {
        try {
          let result = null;
          switch (method) {
            case 'GET':
              result = await apiClient.get(url);
              break;
            case 'POST':
              result = await apiClient.post(url, body);
              break;
            default:
              throw new Error('Invalid method');
          }
          setFetchState({
            isLoading: false,
            isSuccess: true,
            isFailed: false,
            error: null,
            data: result
          });
        } catch (error) {
          setFetchState({isLoading: false, isSuccess: false, isFailed: true, error, data: null});
        }
      }
      fetchData();
    },
    [url, method, body]
  );
  return fetchState;
}

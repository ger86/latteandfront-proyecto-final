import {AUTH_TOKEN} from 'consts/backend';

const headers = {
  accept: 'application/json',
  'Content-Type': 'application/json',
  'X-AUTH-TOKEN': AUTH_TOKEN
};

async function processResponse(response) {
  if (!response.ok) {
    throw new Error(`Request failed with ${response.status}`);
  }
  const json = await response.json();
  return json;
}

const apiClient = {
  get: async function(url) {
    const response = await fetch(url, {
      method: 'GET',
      headers
    });
    return await processResponse(response);
  },
  post: async function(url, body) {
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body
    });
    return await processResponse(response);
  },
};

export default apiClient;
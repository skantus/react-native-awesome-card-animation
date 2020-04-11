import {UNAUTHORIZED} from 'http-status-codes';

type Headers = {
  Accept: string;
  'Content-Type': string;
};

const defaultHeaders: Headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

async function httpRequest(
  url: string,
  method: string,
  headers: Headers,
  body?: string,
) {
  try {
    const options: {
      method: string;
      headers: Headers;
      body: string;
    } = {method, headers, body};
    const response = await fetch(url, options);
    if (response.status === UNAUTHORIZED) {
      throw new Error('Error 401: unauthenticated user');
    }
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

const get = async ({url}: {url: string}) => {
  const response = await httpRequest(url, 'GET', defaultHeaders);
  return await response.json();
};

const post = async ({url, body}: {url: string; body: string}) => {
  return httpRequest(url, 'POST', defaultHeaders, body);
};

export default {get, post};

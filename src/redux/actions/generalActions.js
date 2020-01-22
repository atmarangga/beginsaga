import {CALL_REQUEST} from '../types';

export function callRequest(method, params, url) {
  return {
    type: CALL_REQUEST,
    payloads: {
      method,
      params,
      url,
    },
  };
}

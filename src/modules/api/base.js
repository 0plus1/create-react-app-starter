import axios from 'axios';
import { storeLog, LOG_LEVEL_ERROR } from '../logger';

export default class Base {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      // Default timeout of 1 second might fail in lots of cases, 3 seconds is a reasonable amount
      timeout: 30000,
      headers: {
        Accept: 'application/json',
      },
    });
    // Interceptors
    this.instance.interceptors.response.use(
      (response) => response,
      (error) => {
        // Error
        if (error.response) {
          const { status } = error.response;
          if (status === 404) {
            // Handle 404
          }
          if (status === 422) {
            // Handle 422
          }
          // ...
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          storeLog('Network error: 500 or Server down', LOG_LEVEL_ERROR);
        } else {
          // Something happened in setting up the request that triggered an Error
          storeLog(error.message, LOG_LEVEL_ERROR);
        }
        storeLog(error, LOG_LEVEL_ERROR);
        return Promise.reject(error);
      },
    );
  }
}

import axios from 'axios';

const api = axios.create({
    headers: {
        'content-type': 'api'
    }
});

// Add a request interceptor
api.interceptors.request.use((config) => {
    // Do something before request is sent
    return config;
  }, (error) => {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
api.interceptors.response.use((response) => {
    // Any status code that lie within the range of 2xx cause this to trigger
    // Do something with response data
    console.log('response:', response)
    if (response.status !== 200) {
        Promise.reject(response);
    }
    return response;
  }, (error) => {
    console.log('err:', error.response)
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  export default api;
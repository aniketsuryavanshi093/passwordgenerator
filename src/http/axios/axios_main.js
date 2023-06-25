import axios from 'axios';

const axiosMain = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

export const setBaseUrl = baseUrl => {
  axiosMain.defaults.baseURL = baseUrl;
};

export default axiosMain;

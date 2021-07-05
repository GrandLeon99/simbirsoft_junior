import Axios from 'axios';

let axiosInstance = null;

// eslint-disable-next-line import/prefer-default-export
export const request = () => {
  if (!axiosInstance) {
    axiosInstance = Axios.create({
      headers: {
        'X-Auth-Token': process.env.VUE_APP_X_AUTH_TOKEN,
      },
    });
  }
  return axiosInstance;
};

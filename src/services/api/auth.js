import Cookies from "js-cookie";
import { config } from "../../global/config";
import axios from "axios";
import * as Crypto from "../helper/crypto"

export const login = async (data) => {
  const response = await axios
    .post(`${config.api.url}/users/login`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });

  return response;
};

export const register = async (data) => {
  const response = await axios
    .post(`${config.api.url}/users/register`, data)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });

  return response;
};

export const getUser = async () => {
  const authConfig = {
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`
    }
  };
  const response = await axios
    .put(`${config.api.url}/users/`, {}, authConfig)
    .then((response) => {
      return response.data
    })
    .catch((error) => {
      return error.response.data
    })
    
  Cookies.set('user', Crypto.encrypt(response.data.user));
    
  return response;
};

export const updateUser = async (data) => {
  const authConfig = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${Cookies.get('token')}`
    }
  };
  return await axios
    .post(`${config.api.url}/users/update`, data, authConfig)
    .then(async (response) => {
      await getUser();
      return response
    })
    .catch((error) => {
      return error.response.data
    })

}

export const updateEmail = async (data) => {
  const authConfig = {
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`
    }
  };
  return await axios
    .post(`${config.api.url}/users/email`, data, authConfig)
    .then(async (response) => {
      await getUser();
      return response
    })
    .catch((error) => {
      return error.response.data
    })
}

export const updatePassword = async (data) => {
  const authConfig = {
    headers: {
      Authorization: `Bearer ${Cookies.get('token')}`
    }
  };
  return await axios
    .post(`${config.api.url}/users/password`, data, authConfig)
    .then(async (response) => {
      await getUser();
      return response
    })
    .catch((error) => {
      return error.response.data
    })

}
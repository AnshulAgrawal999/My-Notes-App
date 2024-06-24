import axios from "axios";
import { AUTH_ERROR, AUTH_LOADING, AUTH_SUCCESS, LOGOUT } from "../actionTypes";

export const login = (user) => (dispatch) => {
  dispatch({ type: AUTH_LOADING });
  return axios.post("https://my-notes-app-1etb.onrender.com/users/login", user);
};

export const logout = (token) => (dispatch) => {
  // return axios.post("https://my-notes-app-1etb.onrender.com/users/logout", {
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  // });

  dispatch({ type: LOGOUT });
};

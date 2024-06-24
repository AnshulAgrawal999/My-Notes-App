import axios from "axios";
import { NOTES_ERROR, NOTES_FETCHING, NOTES_LOADING } from "../actionTypes";

export const getNotes = (token) => (dispatch) => {
  dispatch({ type: NOTES_LOADING });
  axios
    .get("https://my-notes-app-1etb.onrender.com/notes", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch({ type: NOTES_FETCHING, payload: res.data});
      // console.log(res.data);
    })
    .catch((err) => {
      dispatch({ type: NOTES_ERROR });
      // console.log(err);
    });
};

export const createNotes = (newNote) => (dispatch) => {
  return axios.post("https://my-notes-app-1etb.onrender.com/notes/create", newNote, {
    headers: {
      Authorization: `Bearer ${document.cookie?.split("=")[1]}`,
    },
  });
};

export const EditNotes = (id, body, token) => (dispatch) => {
  return axios.patch(`https://my-notes-app-1etb.onrender.com/notes/update/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const DeleteNotes = (token, id) => () => {
  return axios.delete(`https://my-notes-app-1etb.onrender.com/notes/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

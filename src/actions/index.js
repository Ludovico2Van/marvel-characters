import md5 from 'md5';
import store from "../store/store";
import { API, CHARACTER_PER_PAGE } from '../constants/config';
import {
    CHARACTERS_REQUEST,
    CHARACTERS_SUCCESS,
    CHARACTERS_FAILURE,
    CHANGE_PAGE,
    CHANGE_PAGE_COUNT,
    CHARACTER_REQUEST,
    CHARACTER_SUCCESS,
    CHARACTER_FAILURE,
  } from "../constants/action-types";

export const fetch_characters_post = () => {
  return { type: CHARACTERS_REQUEST };
};

export const receive_characters_post = post => {
  return {
    type: CHARACTERS_SUCCESS,
    data: post.results,
  };
};

export const receive_characters_error = () => {
  return { type: CHARACTERS_FAILURE };
};

export const change_page = page => {
  return { type: CHANGE_PAGE, page };
};

export const change_page_count = total => {
  return { type: CHANGE_PAGE_COUNT, count: parseInt(total / CHARACTER_PER_PAGE) };
};

export const fetch_character_post = () => {
  return { type: CHARACTER_REQUEST };
};

export const receive_character_post = post => {
  return {
    type: CHARACTER_SUCCESS,
    data: post.results[0],
  };
};

export const receive_character_error = () => {
  return { type: CHARACTER_FAILURE };
};

export const thunk_characters_action_creator = page => {
  const ts = Date.now();
  const hash = md5(`${ts}${API.PRIVATE_KEY}${API.PUBLIC_KEY}`);
  const offset = page * CHARACTER_PER_PAGE
  store.dispatch(fetch_characters_post());
  return (dispatch) => {
    return fetch(`${API.BASE_URL}/characters?ts=${ts}&apikey=${API.PUBLIC_KEY}&hash=${hash}&limit=${CHARACTER_PER_PAGE}&offset=${offset}`)
      .then(data => data.json())
      .then(resp => {
        dispatch(change_page_count(resp.data.total));
        dispatch(receive_characters_post(resp.data))}
      )
      .catch(err => dispatch(receive_characters_error()));
  };
};

export const thunk_character_action_creator = id => {
  const ts = Date.now();
  const hash = md5(`${ts}${API.PRIVATE_KEY}${API.PUBLIC_KEY}`);
  store.dispatch(fetch_character_post());
  return (dispatch) => {
    return fetch(`${API.BASE_URL}/characters/${id}?ts=${ts}&apikey=${API.PUBLIC_KEY}&hash=${hash}`)
      .then(data => data.json())
      .then(resp => dispatch(receive_character_post(resp.data)))
      .catch(err => dispatch(receive_character_error()));
  };
};
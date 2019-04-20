import {
  CHARACTER_REQUEST,
  CHARACTER_SUCCESS,
  CHARACTER_FAILURE
} from "../constants/action-types";

const initialState = {
  isLoading: false,
  isError: false,
  data: {},
};

const character = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTER_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case CHARACTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.data,
      };
    case CHARACTER_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default character;

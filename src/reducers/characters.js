import {
  CHARACTERS_REQUEST,
  CHARACTERS_SUCCESS,
  CHARACTERS_FAILURE
} from "../constants/action-types";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

const characters = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTERS_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case CHARACTERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.data,
      };
    case CHARACTERS_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default characters;

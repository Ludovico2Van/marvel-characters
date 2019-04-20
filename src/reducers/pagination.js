import {
  CHANGE_PAGE,
  CHANGE_PAGE_COUNT
} from "../constants/action-types";

const initialState = {
  page: 1,
  count: 1,
};

const pagination = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return { ...state, page: action.page };
      case CHANGE_PAGE_COUNT:
      return { ...state, count: action.count};
    default:
    return state;
  }
};

export default pagination;

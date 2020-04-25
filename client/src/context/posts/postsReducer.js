import { CLEAR_ADD_FIELDS, POSTS_LOADED } from "../types";
export default (state, action) => {
  switch (action.type) {
    case CLEAR_ADD_FIELDS:
      return {
        ...state,
        clearAddFields: true
      };
    case POSTS_LOADED:
      return {
        ...state,
        posts: action.payload
      };
    default:
      return state;
  }
};

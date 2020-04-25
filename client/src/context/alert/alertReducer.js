import { SHOW_ALERT, HIDE_ALERT } from "../types";
export default (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        showAlert: true,
        type: action.payload.type,
        msg: action.payload.msg
      };
    case HIDE_ALERT:
      return {
        ...state,
        showAlert: false,
        type: null,
        msg: null
      };
    default:
      return {
        ...state
      };
  }
};

import { parseToken, toggleStorage } from "../utils";
import actions from "./appActions";

export const initialState = {
  isUserLoggedIn: false,
  user: null,
  token: "",
};
export const appReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actions.signInUser: {
      const user = parseToken(payload);
      toggleStorage(payload);
      return { ...state, isUserLoggedIn: true, token: payload, user };
    }
    case actions.signOutUser: {
      toggleStorage();
      return { ...state, isUserLoggedIn: false, token: "", user: null };
    }
    default:
      return state;
  }
};

import {
  LOGIN_PENDING,
  LOGIN_REJECTED,
  LOGIN_SUCCESS,
} from "../types/loginTypes";

const initialState = {
  token: null,
  error: null,
  isLoading: false,
};

export const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_PENDING:
      return { ...state, token: null, error: null, isLoading: true };
    case LOGIN_REJECTED:
      return { ...state, token: null, error: payload, isLoading: false };
    case LOGIN_SUCCESS:
      return { ...state, token: payload, error: null, isLoading: false };
    default:
      return { ...state };
  }
};

import axios from "axios";
import { URL_BASE } from "../config";
import {
  LOGIN_PENDING,
  LOGIN_REJECTED,
  LOGIN_SUCCESS,
} from "../types/loginTypes";

export const userLogin = (payload) => {
  return async function (dispatch) {
    dispatch({ type: LOGIN_PENDING });
    try {
      const json = await axios.post(`${URL_BASE}/auth/signin`, payload);
      console.log(json);
      dispatch({ type: LOGIN_SUCCESS, payload: json.data });
    } catch (error) {
      dispatch({ type: LOGIN_REJECTED, payload: error });
    }
  };
};

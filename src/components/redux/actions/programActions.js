import {
  GET_ALL_PROGRAMS_PENDING,
  GET_ALL_PROGRAMS_SUCCESS,
  GET_ALL_PROGRAMS_REJECTED,
  ADD_PROGRAM_PENDING,
  ADD_PROGRAM_REJECTED,
  ADD_PROGRAM_SUCCESS,
  DELETE_PROGRAM_PENDING,
  DELETE_PROGRAM_REJECTED,
  DELETE_PROGRAM_SUCCESS,
  EDIT_PROGRAM_PENDING,
  EDIT_PROGRAM_REJECTED,
  EDIT_PROGRAM_SUCCESS,
} from "../types/programTypes";
import { URL_BASE } from "../config";
import axios from "axios";

export const getAllPrograms = () => {
  return async function (dispatch) {
    dispatch({ type: GET_ALL_PROGRAMS_PENDING });
    try {
      const json = await axios(`${URL_BASE}/programs`);
      dispatch({ type: GET_ALL_PROGRAMS_SUCCESS, payload: json.data });
    } catch (error) {}
  };
};

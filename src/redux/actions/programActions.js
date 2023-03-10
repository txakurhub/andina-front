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
  GET_PROGRAM_BY_ID_PENDING,
  GET_PROGRAM_BY_ID_SUCCESS,
  GET_PROGRAM_BY_ID_REJECTED,
} from "../types/programTypes";
import { URL_BASE } from "../config";
import axios from "axios";

export const getAllPrograms = () => {
  return async function (dispatch) {
    dispatch({ type: GET_ALL_PROGRAMS_PENDING });
    try {
      const json = await axios(`${URL_BASE}/programs`);
      dispatch({ type: GET_ALL_PROGRAMS_SUCCESS, payload: json.data });
    } catch (error) {
      dispatch({ type: GET_ALL_PROGRAMS_REJECTED, payload: error });
    }
  };
};

export const getProgramById = (id) => {
  return async function (dispatch) {
    dispatch({ type: GET_PROGRAM_BY_ID_PENDING });
    try {
      const json = await axios(`${URL_BASE}/program/${id}`);
      dispatch({ type: GET_PROGRAM_BY_ID_SUCCESS, payload: json.data });
    } catch (error) {
      dispatch({ type: GET_PROGRAM_BY_ID_REJECTED, payload: error });
    }
  };
};

export const addProgram = (program, payload) => {
  return async function (dispatch) {
    dispatch({ type: ADD_PROGRAM_PENDING });
    try {
      const json = await axios.post(
        `${URL_BASE}/programs`,
        program,
        { total: 1 },
        {
          headers: {
            authorization: `jwt ${payload}`,
            "content-type": "application/json",
          },
        }
      );
      dispatch({ type: ADD_PROGRAM_SUCCESS, payload: json.data });
    } catch (error) {
      dispatch({ type: ADD_PROGRAM_REJECTED, payload: error });
    }
  };
};

export const deleteProgram = (program, payload) => {
  return async function (dispatch) {
    dispatch({ type: DELETE_PROGRAM_PENDING });
    try {
      const json = await axios.delete(
        `${URL_BASE}/programs`,
        program,
        { total: 1 },
        {
          headers: {
            authorization: `jwt ${payload}`,
            "content-type": "application/json",
          },
        }
      );
      dispatch({ type: DELETE_PROGRAM_SUCCESS, payload: json.data });
    } catch (error) {
      dispatch({ type: DELETE_PROGRAM_REJECTED, payload: error });
    }
  };
};

export const editProgram = (program, payload) => {
  return async function (dispatch) {
    dispatch({ type: EDIT_PROGRAM_PENDING });
    try {
      const json = await axios.put(
        `${URL_BASE}/programs`,
        program,
        { total: 1 },
        {
          headers: {
            authorization: `jwt ${payload}`,
            "content-type": "application/json",
          },
        }
      );
      dispatch({ type: EDIT_PROGRAM_SUCCESS, payload: json.data });
    } catch (error) {
      dispatch({ type: EDIT_PROGRAM_REJECTED, payload: error });
    }
  };
};

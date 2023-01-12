import {
  ADD_PROGRAM_PENDING,
  ADD_PROGRAM_REJECTED,
  ADD_PROGRAM_SUCCESS,
  DELETE_PROGRAM_PENDING,
  DELETE_PROGRAM_REJECTED,
  DELETE_PROGRAM_SUCCESS,
  EDIT_PROGRAM_PENDING,
  EDIT_PROGRAM_REJECTED,
  EDIT_PROGRAM_SUCCESS,
  GET_ALL_PROGRAMS_PENDING,
  GET_ALL_PROGRAMS_REJECTED,
  GET_ALL_PROGRAMS_SUCCESS,
} from "../types/programTypes";

const initialState = {
  allPrograms: [],
  currentProgram: null,
  error: null,
  isLoading: false,
};

export const programReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_PROGRAMS_PENDING:
      return {
        ...state,
        allPrograms: [],
        currentProgram: null,
        error: null,
        isLoading: true,
      };
    case GET_ALL_PROGRAMS_REJECTED:
      return {
        ...state,
        allPrograms: [],
        currentProgram: null,
        error: payload,
        isLoading: false,
      };
    case GET_ALL_PROGRAMS_SUCCESS:
      return {
        ...state,
        allPrograms: payload,
        currentProgram: null,
        error: null,
        isLoading: false,
      };
    case ADD_PROGRAM_PENDING:
      return {
        ...state,
        allPrograms: [],
        currentProgram: null,
        error: null,
        isLoading: true,
      };
    case ADD_PROGRAM_REJECTED:
      return {
        ...state,
        allPrograms: [],
        currentProgram: null,
        error: payload,
        isLoading: false,
      };
    case ADD_PROGRAM_SUCCESS:
      return {
        ...state,
        allPrograms: [],
        currentProgram: payload,
        error: null,
        isLoading: false,
      };
    case EDIT_PROGRAM_PENDING:
      return {
        ...state,
        allPrograms: [],
        currentProgram: null,
        error: null,
        isLoading: true,
      };
    case EDIT_PROGRAM_REJECTED:
      return {
        ...state,
        allPrograms: [],
        currentProgram: null,
        error: payload,
        isLoading: false,
      };
    case EDIT_PROGRAM_SUCCESS:
      return {
        ...state,
        allPrograms: [],
        currentProgram: payload,
        error: null,
        isLoading: false,
      };
    case DELETE_PROGRAM_PENDING:
      return {
        ...state,
        allPrograms: [],
        currentProgram: null,
        error: null,
        isLoading: true,
      };
    case DELETE_PROGRAM_REJECTED:
      return {
        ...state,
        allPrograms: [],
        currentProgram: null,
        error: payload,
        isLoading: false,
      };
    case DELETE_PROGRAM_SUCCESS:
      return {
        ...state,
        allPrograms: [],
        currentProgram: payload,
        error: null,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};

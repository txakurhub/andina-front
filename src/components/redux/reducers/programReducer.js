import {
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
    default:
      return { ...state };
  }
};

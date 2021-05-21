/* eslint-disable import/no-anonymous-default-export */
import { ADD_RECORD, GET_RECORDS, RECORD_ERROR } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_RECORDS:
      return {
        ...state,
        records: action.payload,
        loading: false
      };
    case ADD_RECORD:
      return {
        ...state,
        records: [action.payload],
        loading: false
      };
    case RECORD_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

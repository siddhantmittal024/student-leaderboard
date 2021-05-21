import React, { useReducer } from 'react';
import axios from 'axios';
import recordContext from './RecordContext';
import RecordReducer from './RecordReducer';

import { ADD_RECORD, GET_RECORDS, RECORD_ERROR } from '../types';

const RecordState = (props) => {
  const initialState = {
    records: [],
    error: null
  };

  const [state, dispatch] = useReducer(RecordReducer, initialState);

  const getRecords = async () => {
    try {
      const res = await axios.get('api/student/displayRecords');
      dispatch({
        type: GET_RECORDS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: RECORD_ERROR,
        payload: err.response.data.msg
      });
    }
  };

  const addRecord = async (record) => {
    try {
      const res = await axios.post('api/student/createRecord', record);
      dispatch({ type: ADD_RECORD, payload: res.data });
    } catch (err) {
      dispatch({ type: RECORD_ERROR, payload: err.response.data.msg });
    }
  };

  return (
    <recordContext.Provider
      value={{
        records: state.records,
        error: state.error,
        addRecord,
        getRecords
      }}
    >
      {props.children}
    </recordContext.Provider>
  );
};

export default RecordState;

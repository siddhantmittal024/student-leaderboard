import React, { useContext, useEffect } from 'react';
import Spinner from '../Layout/Spinner';
import RecordContext from '../../context/studentRecord/RecordContext';
import { Link } from 'react-router-dom';

export const Records = () => {
  const recordContext = useContext(RecordContext);
  const { records, getRecords, loading } = recordContext;

  useEffect(() => {
    getRecords();
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <>loading</>;
  }

  if (records !== null && records.length === 0 && !loading) {
    return <h4>Please add a Record</h4>;
  }

  return (
    <div className="table-box">
      <div className="grid">
        <span>
          <strong>Rank</strong>
        </span>
        <span>
          <strong>Roll No.</strong>
        </span>
        <span>
          <strong>Name</strong>
        </span>
        <span>
          <strong>Maths</strong>
        </span>
        <span>
          <strong>Physics</strong>
        </span>
        <span>
          <strong>Chemistry</strong>
        </span>
        <span>
          <strong>Percentage</strong>
        </span>
        {!loading ? (
          records &&
          records.data.map((record, i) => (
            <>
              <span key={i}>{i + 1}</span>
              <span>{record.RollNo}</span>
              <span>{record.StudentName}</span>
              <span>{record.MathsMarks}</span>
              <span>{record.PhysicsMarks}</span>
              <span>{record.ChemMarks}</span>
              <span>{`${record.Percentage}%`}</span>
            </>
          ))
        ) : (
          <Spinner />
        )}
      </div>
      <div className="py-2 back-button">
        <Link to="/">Back</Link>
      </div>
    </div>
  );
};

export default Records;

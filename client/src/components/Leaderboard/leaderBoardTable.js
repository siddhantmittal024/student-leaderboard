import React, { useState, useContext, useEffect } from 'react';
import Spinner from '../Layout/Spinner';
import RecordContext from '../../context/studentRecord/RecordContext';
import { Link } from 'react-router-dom';

export const Records = () => {
  const recordContext = useContext(RecordContext);
  const { records, getRecords, loading } = recordContext;

  //const [sort, setSort] = useState({});

  const [q, setQ] = useState('');

  useEffect(() => {
    getRecords();
    //eslint-disable-next-line
  }, []);

  function compareBy(key) {
    return function (a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  function sortBy(key) {
    let arrayCopy = [...records.data];
    arrayCopy.sort(compareBy(key));
    console.log(arrayCopy);
  }

  if (loading) {
    return <>loading</>;
  }

  if (records !== null && records.length === 0 && !loading) {
    return <h4>Please add a Record!!</h4>;
  }

  return (
    <div className="table-box">
      <div>
        <div className="search-bar">
          <input
            type="text"
            value={q}
            className="search-input"
            placeholder="Search by name..."
            onChange={(e) => setQ(e.target.value)}
          />
        </div>
      </div>
      <div className="grid">
        <span>
          <strong>Rank</strong>
        </span>
        <span>
          <strong>Roll No.</strong>
          <i
            className="fa fa-sort-up p-left"
            type="button"
            onClick={() => sortBy('Roll No.')}
          ></i>
        </span>
        <span>
          <strong>Name</strong>
          <i
            className="fa fa-sort-up p-left"
            type="button"
            //onClick={() => setSorted('Name')}
          ></i>
        </span>
        <span>
          <strong>Maths</strong>
          <i
            className="fa fa-sort-up p-left"
            type="button"
            //onClick={() => setSorted('Maths')}
          ></i>
        </span>
        <span>
          <strong>Physics</strong>
          <i
            className="fa fa-sort-up p-left"
            type="button"
            //onClick={() => setSorted('Physics')}
          ></i>
        </span>
        <span>
          <strong>Chemistry</strong>

          <i
            className="fa fa-sort-up p-left"
            type="button"
            //onClick={() => setSorted('Chemistry')}
          >
            {' '}
          </i>
        </span>
        <span>
          <strong>Percentage</strong>
          <i
            className="fa fa-sort-up p-left"
            type="button"
            //onClick={() => setSorted('Percentage')}
          ></i>
        </span>
        {!loading ? (
          records &&
          records.data
            .filter((record) => {
              if (!q) {
                return record;
              } else if (
                record.StudentName.toLowerCase().includes(q.toLowerCase())
              ) {
                return record;
              }
            })
            .map((record, i) => (
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

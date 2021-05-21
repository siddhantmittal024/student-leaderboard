import React, { useState, useContext, useEffect } from 'react';
import RecordContext from '../../context/studentRecord/RecordContext';
import { Link } from 'react-router-dom';

import { toast } from 'react-toastify';

export const RecordForm = () => {
  const recordContext = useContext(RecordContext);
  const { addRecord, error, records, getRecords } = recordContext;

  //const [recordCreated, setRecordCreated] = useState(false);

  const [record, setRecord] = useState({
    RollNo: '',
    Name: '',
    MathsMarks: '',
    PhysicsMarks: '',
    ChemMarks: ''
  });

  const { RollNo, Name, MathsMarks, PhysicsMarks, ChemMarks } = record;

  //getRecords();

  useEffect(() => {
    //getRecords();
    if (error === 'Student Record already exists!!') {
      toast.error(error);
    }
    //console.log(records.lengths);
    //eslint-disable-next-line
  }, [error]);

  const onChange = (e) =>
    setRecord({ ...record, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      RollNo === '' ||
      Name === '' ||
      MathsMarks === '' ||
      PhysicsMarks === '' ||
      ChemMarks === ''
    ) {
      toast.error('Please fill all the fields!');
      //setAlert('Please fill all the fields', 'danger');
    } else if (
      MathsMarks < 0 ||
      PhysicsMarks < 0 ||
      ChemMarks < 0 ||
      MathsMarks > 100 ||
      PhysicsMarks > 100 ||
      ChemMarks > 100
    ) {
      toast.error('Marks should be between 0 to 100');
      //setAlert('Marks should be between 0 to 100', 'danger');
    } else {
      try {
        addRecord(record);
        toast.success('Record Added!');
      } catch (err) {
        toast.error('Not filled');
      }

      setRecord({
        RollNo: '',
        Name: '',
        MathsMarks: 0,
        PhysicsMarks: 0,
        ChemMarks: 0
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="number"
        placeholder="Roll No."
        name="RollNo"
        value={RollNo}
        onChange={onChange}
      />

      <input
        type="text"
        placeholder="Name"
        name="Name"
        value={Name}
        onChange={onChange}
      />
      <input
        type="number"
        placeholder="MathsMarks"
        name="MathsMarks"
        value={MathsMarks}
        onChange={onChange}
      />
      <input
        type="number"
        placeholder="PhysicsMarks"
        name="PhysicsMarks"
        value={PhysicsMarks}
        onChange={onChange}
      />
      <input
        type="number"
        placeholder="ChemMarks"
        name="ChemMarks"
        value={ChemMarks}
        onChange={onChange}
      />
      {MathsMarks !== '' && PhysicsMarks !== '' && ChemMarks !== '' && (
        <div className="lower-box">
          <div className="py-2 total-box">
            TOTAL MARKS :{' '}
            {`${
              parseInt(ChemMarks) +
              parseInt(PhysicsMarks) +
              parseInt(MathsMarks)
            }`}
          </div>
          <div className="total-box">
            PERCENTAGE :{' '}
            {`${(
              ((parseInt(ChemMarks) +
                parseInt(PhysicsMarks) +
                parseInt(MathsMarks)) /
                300) *
              100
            ).toFixed(2)}%`}
          </div>
        </div>
      )}
      <div>
        <input
          type="submit"
          value={'Add Record'}
          className="btn btn-dark btn-block"
        />
        <div className="py-2 back-button">
          <Link to="/">Back</Link>
        </div>
      </div>
    </form>
  );
};

export default RecordForm;

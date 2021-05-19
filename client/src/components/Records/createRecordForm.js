import React, { useState, useContext, useEffect } from 'react';
import RecordContext from '../../context/studentRecord/RecordContext';
import AlertContext from '../../context/alert/AlertContext';

export const RecordForm = () => {
  const alertContext = useContext(AlertContext);
  const recordContext = useContext(RecordContext);
  const { addRecord } = recordContext;
  const { setAlert } = alertContext;

  const [record, setRecord] = useState({
    RollNo: '',
    Name: '',
    MathsMarks: '',
    PhysicsMarks: '',
    ChemMarks: ''
  });

  const { RollNo, Name, MathsMarks, PhysicsMarks, ChemMarks } = record;

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
      alert('Please fill all the fields!');
      //setAlert('Please fill all the fields', 'danger');
    } else if (MathsMarks > 100 || PhysicsMarks > 100 || ChemMarks > 100) {
      alert('Marks should be between 0 to 100');
      //setAlert('Marks should be between 0 to 100', 'danger');
    } else {
      addRecord(record);
      alert('Record Added Successfully!');
      setRecord({
        RollNo: '',
        Name: '',
        MathsMarks: '',
        PhysicsMarks: '',
        ChemMarks: ''
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
      {(MathsMarks !== '' || PhysicsMarks !== '' || ChemMarks !== '') && (
        <div>
          TOTAL MARKS:{' '}
          {`${
            parseInt(ChemMarks) + parseInt(PhysicsMarks) + parseInt(MathsMarks)
          }`}
          PERCENTAGE:{' '}
          {`${(
            ((parseInt(ChemMarks) +
              parseInt(PhysicsMarks) +
              parseInt(MathsMarks)) /
              300) *
            100
          ).toFixed(2)}%`}
        </div>
      )}

      <div>
        <input
          type="submit"
          value={'Add Record'}
          className="btn btn-dark btn-block"
        />
      </div>
    </form>
  );
};

export default RecordForm;

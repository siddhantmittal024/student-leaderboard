import React, { Fragment } from 'react';
import spinner from './Pendulum.gif';

const Spinner = () => {
  return (
    <Fragment>
      <img
        src={spinner}
        alt="Loading ..."
        style={{ width: '200px', margin: 'auto', display: 'block' }}
      />
    </Fragment>
  );
};

export default Spinner;

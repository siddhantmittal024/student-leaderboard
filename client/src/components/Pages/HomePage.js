import React from 'react';
import { Link } from 'react-router-dom';
import pic1 from '../../pic2.png';

const HomePage = () => {
  return (
    <div className="container">
      <div className="box">
        <h1 className="py-2">STUDENT RESULT PORTAL</h1>
        <h2> HOME PAGE </h2>
        <div className="pageLinks">
          <Link to="/enterMarks"> ENTER MARKS </Link>
          <Link to="/leaderboard"> VIEW LEADERBOARD </Link>
        </div>

        <p className="homepage-text">
          This is a student result portal designed for entering a students
          record by clicking on <strong>Enter Marks</strong> and viewing the
          leaderboard for the result by clicking on{' '}
          <strong>View Leaderboard</strong>.
        </p>
        <img src={pic1} alt="img" className="img" />
      </div>
    </div>
  );
};

export default HomePage;

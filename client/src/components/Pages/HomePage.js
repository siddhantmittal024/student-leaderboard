import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container">
      <div className="box">
        <h1>STUDENT RESULT PORTAL</h1>
        <h2> HOME PAGE </h2>
        <div className="pageLinks">
          <Link to="/enterMarks"> ENTER MARKS </Link>
          <Link to="/leaderboard"> VIEW LEADERBOARD </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import React from 'react';
import Records from '../Leaderboard/leaderBoardTable';

const LeaderboardPage = () => {
  return (
    <div className="container">
      <div className="box">
        <h1 className="py-1">LEADERBOARD</h1>
        <Records />
      </div>
    </div>
  );
};

export default LeaderboardPage;

import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecordState from './context/studentRecord/RecordState';
import AlertState from './context/alert/AlertState';
import HomePage from './components/Pages/HomePage';
import EnterMarksPage from './components/Pages/EnterMarksPage';
import LeaderboardPage from './components/Pages/LeaderboardPage';
import Alerts from './components/Layout/Alerts';

function App() {
  return (
    <RecordState>
      <AlertState>
        <Router>
          <Fragment>
            <div className="App">
              <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/enterMarks" component={EnterMarksPage} />
                <Route path="/leaderboard" component={LeaderboardPage} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </AlertState>
    </RecordState>
  );
}

export default App;

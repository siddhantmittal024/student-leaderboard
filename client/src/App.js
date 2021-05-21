import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecordState from './context/studentRecord/RecordState';
import HomePage from './components/Pages/HomePage';
import EnterMarksPage from './components/Pages/EnterMarksPage';
import LeaderboardPage from './components/Pages/LeaderboardPage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <RecordState>
      <Router>
        <Fragment>
          <div className="App">
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/enterMarks" component={EnterMarksPage} />
              <Route path="/leaderboard" component={LeaderboardPage} />
            </Switch>
          </div>
          <ToastContainer />
        </Fragment>
      </Router>
    </RecordState>
  );
}

export default App;

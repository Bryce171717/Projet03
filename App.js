// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Chat from './components/Chat';
import ScreenShare from './components/ScreenShare';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/chat" component={Chat} />
          <Route path="/screenshare" component={ScreenShare} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

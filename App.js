// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './components/Chat';
import ScreenShare from './components/ScreenShare';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/chat" element={<Chat />} />
          <Route path="/screenshare" element={<ScreenShare />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

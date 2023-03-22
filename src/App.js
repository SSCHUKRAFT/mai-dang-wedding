import React from 'react';
import { Home, Rsvp, Timeline, Travel, Party } from './pages'
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Sidebar className="side-bar">
        <Routes>
          <Route path="/"element={<Home />} />
          <Route path="/rsvp"element={<Rsvp />} />
          <Route path="/timeline"element={<Timeline />} />
          <Route path="/travel"element={<Travel />} />
          <Route path="/weddingParty"element={<Party />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  </div>
);

export default App;

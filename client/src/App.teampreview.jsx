import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import OurTeam from './pages/OurTeam';
import TeamMemberDetails from './pages/TeamMemberDetails';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App font-inter bg-white">
          <Routes>
            <Route path="/" element={<OurTeam />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/team/:name" element={<TeamMemberDetails />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
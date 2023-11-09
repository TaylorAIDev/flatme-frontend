import React from 'react';
import { Routes, Route } from "react-router-dom"
import FindFlatmates from './components/Flatmate/FindFlatmates';
import Main from "./components/layout/Main"
import FindRoom from './components/Findroom/FindRoom';
import Dashboard from './components/layout/Dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/room" element={<FindRoom />} />
        <Route path="/flatmate" element={<FindFlatmates />} />
      </Routes>
    </div>
  )
}

export default App
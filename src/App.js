import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import Calculator from './components/Calculator';
import Cartoon from './components/Cartoon';


const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Profile/>}/>
          <Route exact path="/calculator" element={<Calculator/>}/>
          <Route exact path="/cartoon" element={<Cartoon/>}/>
        </Routes>
    </Router>
  );
}

export default App;


import  Home from './pages/Home';
import  Settings  from './pages/Settings';
import Edit from './pages/Edit';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';




export default function App ()  {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/edit/:name" element={<Edit />} />
        </Routes>
    </Router>
);



  
}


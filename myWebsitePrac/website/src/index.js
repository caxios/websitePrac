import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Writepostpage from './pages/Writepostpage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} /> {/*this is my homepage route*/}
      <Route path="writepost" element={<Writepostpage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Writepostpage from './pages/Writepostpage';
import { Provider } from 'react-redux'
import store from './store'
import SinglePost from './components/SinglePost';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/*this is my homepage route*/}
        <Route path="writepost" element={<Writepostpage />} />
        <Route path="post/:id" element={<SinglePost />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById('root')
);
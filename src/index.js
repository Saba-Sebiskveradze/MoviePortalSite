import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HashRouter as Router} from 'react-router-dom';
import AppContextProvider from './context/AppContextProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <AppContextProvider>
    <App />
    </AppContextProvider>
  </Router>
);



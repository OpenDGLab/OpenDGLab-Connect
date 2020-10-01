import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import './App.scss';
import App from './App';

ReactDOM.render(
  <BrowserRouter basename="/OpenDGLab-Connect/">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
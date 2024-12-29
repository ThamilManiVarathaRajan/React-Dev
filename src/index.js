import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Helloworld from './Helloworld';
import { useState } from 'react';
import Student from './Student';
import LearningHooks from './LearningHooks';
import ButtonColorChange from './ButtonColorChange';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Helloworld /> */}
    {/* <Student /> */}
    {/* <LearningHooks /> */}
    <ButtonColorChange/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

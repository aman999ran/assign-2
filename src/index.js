import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import  App  from './App';
// import reportWebVitals from './reportWebVitals';
import {createRoot} from "react-dom/client"


const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App tab="home" />);

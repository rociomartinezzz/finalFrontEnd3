import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App'; 
import { ThemeProvider } from './ThemeContext'; 
import Navbar from '../Navbar'

ReactDOM.render(
  <ThemeProvider>
    <App />
    <Navbar/>
  </ThemeProvider>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; 
import { ApiProvider } from './Components/Utils/ApiContext'; 

ReactDOM.render(
  <ApiProvider>
    <App />
  </ApiProvider>,
  document.getElementById('root')
);
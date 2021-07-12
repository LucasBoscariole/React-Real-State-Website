import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppProvider } from './context';
import { FilterProvider } from './filtercontext';

ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

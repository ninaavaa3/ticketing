import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/fonts/iranyekan.ttf';
import Router from './Router';
import 'semantic-ui-css/semantic.min.css'
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
 <BrowserRouter >
   <Router/>
   </BrowserRouter>
   </Provider>
  
);



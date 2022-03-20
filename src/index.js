import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import './i18n/i18n';
import store from './store/index';

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={'.'}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </Provider>,
  document.getElementById('root')
);

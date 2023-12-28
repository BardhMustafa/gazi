import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Theme from './shared/theme/Theme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import '@fontsource/inter/variable.css';
import 'overlayscrollbars/overlayscrollbars.css';
import './index.css';
import App from './components/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

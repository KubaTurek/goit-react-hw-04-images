import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { ImagesPrivider } from './ImagesContext/ImagesContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ImagesPrivider>
    <App />
  </ImagesPrivider>
);

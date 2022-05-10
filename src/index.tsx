import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          'header.menu.forecast': 'forecast',
          'header.menu.schedule': 'schedule',
          'header.menu.employees': 'employees',
          'header.menu.reports': 'reports',
          'header.menu.settings': 'settings',
        }
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  }).then(() => console.log('i18n done'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

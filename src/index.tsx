import React from 'react';
import ReactDOM from 'react-dom';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './resources/lang';

import './index.module.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';



// TODO separate file
// TODO load on demand?
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      }
    },
    lng: "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  }).then(() => {});

// TODO SSR
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

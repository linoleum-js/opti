import React from 'react';
import styles from './App.module.css';

import { Header } from './components/Header';

function App() {
  return (
    <div className={styles.Wrapper}>
      <Header />
    </div>
  );
}

export default App;

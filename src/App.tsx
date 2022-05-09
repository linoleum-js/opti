import React from 'react';
import styles from './App.module.scss';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

function App() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.contentContainer}>
        <Sidebar />
        <div>
          <Header />
          <div>
            Content
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

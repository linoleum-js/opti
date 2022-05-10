import React from 'react';
import styles from './App.module.scss';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ScheduleForm } from './components/ScheduleForm';

function App() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.content}>
          <Header />
          <div className={styles.contentInner}>
            <ScheduleForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

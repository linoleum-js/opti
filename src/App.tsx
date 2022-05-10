import React from 'react';
import styles from './App.module.scss';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { ScheduleForm } from './components/ScheduleForm';

function App() {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.contentContainer}>
        <Sidebar />
        <div>
          <Header />
          <div>
            <ScheduleForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

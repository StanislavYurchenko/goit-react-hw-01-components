import React from 'react';
import Profile from '../Profile/Profile.js';
import Statistics from '../Statistics/Statistics.js';
import user from '../../data/user.json';
import statisticalData from '../../data/statistical-data.json';
import styles from './App.module.css';
import './App.scss';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Profile user={user} />
      </div>
      <div className={styles.box}>
        <Statistics title="Upload stats" stats={statisticalData} />
      </div>
    </div>
  );
}

export default App;

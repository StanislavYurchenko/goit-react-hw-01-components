import React from 'react';
import Profile from '../Profile/Profile.js';
import Statistics from '../Statistics/Statistics.js';
import FriendList from '../FriendList/FriendList.js';
import FriendListItem from '../FriendListItem/FriendListItem.js';
import TransactionHistory from '../TransactionHistory/TransactionHistory.js';
import user from '../../data/user.json';
import statisticalData from '../../data/statistical-data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';
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
      <div className={styles.box}>
        <FriendList>
          <FriendListItem friends={friends} />
        </FriendList>
      </div>
      <div className={styles.box}>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
}

export default App;

// {
//   "id": "1e0700a2-5183-4291-85cc-2065a036a683",
//   "type": "invoice",
//   "amount": "964.82",
//   "currency": "LRD"
// },

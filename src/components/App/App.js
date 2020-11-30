import React from 'react';
import Profile from '../Profile/Profile.js';
import Statistics from '../Statistics/Statistics.js';
import FriendList from '../FriendList/FriendList.js';
import TransactionHistory from '../TransactionHistory/TransactionHistory.js';
import user from '../../data/user.json';
import statisticalData from '../../data/statistical-data.json';
import transactions from '../../data/transactions.json';
import { Box } from './AppStyles';

function App() {
  return (
    <>
      <Box>
        <Profile user={user} />
      </Box>
      <Box>
        <Statistics title="Upload stats" stats={statisticalData} />
      </Box>
      <Box>
        <FriendList />
      </Box>
      <Box>
        <TransactionHistory items={transactions} />
      </Box>
    </>
  );
}

export default App;

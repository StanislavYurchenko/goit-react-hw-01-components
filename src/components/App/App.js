import React from 'react';
import styled from 'styled-components';
import Profile from '../Profile/Profile.js';
import Statistics from '../Statistics/Statistics.js';
import FriendList from '../FriendList/FriendList.js';
import FriendListItem from '../FriendListItem/FriendListItem.js';
import TransactionHistory from '../TransactionHistory/TransactionHistory.js';
import user from '../../data/user.json';
import statisticalData from '../../data/statistical-data.json';
import friends from '../../data/friends.json';
import transactions from '../../data/transactions.json';

const Container = styled.div``;
const Box = styled.div`
  background-color: #f5f5f5;
  padding: 10px;
`;

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
        <FriendList>
          <FriendListItem friends={friends} />
        </FriendList>
      </Box>
      <Box>
        <TransactionHistory items={transactions} />
      </Box>
    </>
  );
}

export default App;

// {
//   "id": "1e0700a2-5183-4291-85cc-2065a036a683",
//   "type": "invoice",
//   "amount": "964.82",
//   "currency": "LRD"
// },

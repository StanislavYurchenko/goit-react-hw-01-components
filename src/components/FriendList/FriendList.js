import React from 'react';
import PropTypes from 'prop-types';
import friends from '../../data/friends.json';
import FriendListItem from './FriendListItem/FriendListItem';
import { List } from './FriendListStyles';

function FriendList() {
  return (
    <List>
      <FriendListItem friends={friends} />
    </List>
  );
}

FriendList.propTypes = {
  children: PropTypes.node,
};

export default FriendList;

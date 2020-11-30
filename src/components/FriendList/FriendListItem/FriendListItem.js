import React from 'react';
import PropTypes, { number, string, bool } from 'prop-types';
import { ListItem, Status, Avatar } from './FriendListItemStyles';

function FriendList({ friends }) {
  return friends.map(frend => (
    <ListItem key={frend.id}>
      <Status isOnline={frend.isOnline}></Status>
      <Avatar src={frend.avatar} alt={frend.name} width="48" />
      <p>{frend.name}</p>
    </ListItem>
  ));
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: string.isRequired,
      name: string.isRequired,
      isOnline: bool.isRequired,
      id: number.isRequired,
    }),
  ).isRequired,
};

export default FriendList;

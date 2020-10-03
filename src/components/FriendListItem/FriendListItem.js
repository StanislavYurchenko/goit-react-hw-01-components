import React from 'react';
import PropTypes, { number, string, bool } from 'prop-types';
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  background-color: green;
  border-radius: 50%;
  margin-right: 10px;
`;
const Avatar = styled.img`
  margin-right: 10px;
`;

function FriendList({ friends }) {
  return friends.map(frend => (
    <ListItem key={frend.id}>
      <Status></Status>
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

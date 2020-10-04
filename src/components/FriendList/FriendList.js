import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  display: block;
  font-family: Helvetica, Arial, sans-serif;
  color: #24292e;
  background-color: #fff;
  max-width: 250px;
  margin: 0 auto;
  text-align: center;
  padding: 0;
  list-style: none;
`;

function FriendList({ children }) {
  return <List>{children}</List>;
}

FriendList.propTypes = {
  children: PropTypes.node,
};

export default FriendList;

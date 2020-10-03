import React from 'react';
import PropTypes, { number, string } from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  color: #24292e;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  max-width: 250px;
  margin: 0 auto;
  text-align: center;
`;
const Description = styled.div`
  padding: 30px;
`;
const Avatar = styled.img`
  margin: 0 auto 30px;
  border-radius: 50%;
`;
const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 10px;
`;
const Tag = styled.div`
  margin: 0 0 10px;
  font-weight: 300;
`;
const Location = styled.div`
  margin: 0;
  font-weight: 300;
`;
const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  border-top: 1px solid grey;
`;
const ListItem = styled.ul`
  padding: 15px 0;
  width: 33.333%;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
  &:not(:last-child) {
    border-right: 1px solid grey;
  }
`;
const ListLabel = styled.span`
  text-align: center;
  display: block;
  font-size: 12px;
`;
const ListQuantity = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 700;
`;

function Profile({ user }) {
  const { name, tag, location, avatar, stats } = user;
  const { followers, views, likes } = stats;
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt={name} />
        <Name>{name}</Name>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <List>
        <ListItem>
          <ListLabel>Followers</ListLabel>
          <ListQuantity>{followers}</ListQuantity>
        </ListItem>
        <ListItem>
          <ListLabel>Views</ListLabel>
          <ListQuantity>{views}</ListQuantity>
        </ListItem>
        <ListItem>
          <ListLabel>Likes</ListLabel>
          <ListQuantity>{likes}</ListQuantity>
        </ListItem>
      </List>
    </Container>
  );
}

// TODO
Profile.defaultProps = {
  location: 'unknown',
  avatar: 'unknown',
};

Profile.propTypes = {
  user: PropTypes.exact({
    name: string.isRequired,
    tag: string.isRequired,
    location: string,
    avatar: string,
    stats: PropTypes.exact({
      followers: number.isRequired,
      views: number.isRequired,
      likes: number.isRequired,
    }).isRequired,
  }),
};

export default Profile;

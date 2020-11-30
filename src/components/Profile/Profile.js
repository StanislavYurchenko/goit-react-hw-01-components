import React from 'react';
import PropTypes, { number, string } from 'prop-types';
import {
  Container,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  List,
  ListItem,
  ListLabel,
  ListQuantity,
} from './ProfileStyles';

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

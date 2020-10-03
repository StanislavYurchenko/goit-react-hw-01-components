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
const Title = styled.h2`
  font-size: 15px;
  text-transform: uppercase;
  padding: 30px;
  margin: 0;
`;
const List = styled.ul``;
const ListItem = styled.ul``;
const ListLabel = styled.span``;
const ListPercentage = styled.span``;

function Statistics({ title, stats }) {
  return (
    <Container>
      <Title>Upload stats</Title>

      <List>
        <ListItem>
          <ListLabel>.docx</ListLabel>
          <ListPercentage>4%</ListPercentage>
        </ListItem>
        <ListItem>
          <ListLabel>.mp3</ListLabel>
          <ListPercentage>14%</ListPercentage>
        </ListItem>
        <ListItem>
          <ListLabel>.pdf</ListLabel>
          <ListPercentage>41%</ListPercentage>
        </ListItem>
        <ListItem>
          <ListLabel>.mp4</ListLabel>
          <ListPercentage>12%</ListPercentage>
        </ListItem>
      </List>
    </Container>
  );
}

// Statistics.defaultProps = {
//   location: 'unknown',
//   avatar: 'unknown',
// };

// Statistics.propTypes = {
//   user: PropTypes.exact({
//     name: string.isRequired,
//     tag: string.isRequired,
//     location: string,
//     avatar: string,
//     stats: PropTypes.exact({
//       followers: number.isRequired,
//       views: number.isRequired,
//       likes: number.isRequired,
//     }).isRequired,
//   }),
// };

export default Statistics;

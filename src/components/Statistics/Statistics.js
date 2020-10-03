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
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  border-top: 1px solid grey;
  text-align: center;
`;
const ListItem = styled.ul`
  padding: 10px 0;
  flex-basis: auto;
  width: 25%;
  color: #fff;
`;
const ListItemBlue = styled(ListItem)`
  background-color: blue;
`;
const ListItemPurple = styled(ListItem)`
  background-color: purple;
`;
const ListItemRed = styled(ListItem)`
  background-color: Red;
`;
const ListItemGreen = styled(ListItem)`
  background-color: Green;
`;
const ListLabel = styled.span`
  display: block;
  font-size: 12px;

  padding-bottom: 10px;
`;
const ListPercentage = styled.span`
  display: block;
`;

function Statistics({ title, stats }) {
  return (
    <Container>
      <Title>{title}</Title>

      <List>
        <ListItemBlue>
          <ListLabel>{stats[0].label}</ListLabel>
          <ListPercentage>{stats[0].percentage}%</ListPercentage>
        </ListItemBlue>
        <ListItemPurple>
          <ListLabel>{stats[1].label}</ListLabel>
          <ListPercentage>{stats[1].percentage}%</ListPercentage>
        </ListItemPurple>
        <ListItemRed>
          <ListLabel>{stats[2].label}</ListLabel>
          <ListPercentage>{stats[2].percentage}%</ListPercentage>
        </ListItemRed>
        <ListItemGreen>
          <ListLabel>{stats[3].label}</ListLabel>
          <ListPercentage>{stats[3].percentage}%</ListPercentage>
        </ListItemGreen>
      </List>
    </Container>
  );
}

Statistics.defaultProps = {
  title: 'STATS',
};

Statistics.propTypes = {
  title: string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: string.isRequired,
      label: string.isRequired,
      percentage: number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;

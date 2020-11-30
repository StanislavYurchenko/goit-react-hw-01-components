import React from 'react';
import PropTypes, { number, string } from 'prop-types';

import {
  Container,
  Title,
  List,
  ListLabel,
  ListPercentage,
  listStyledComponents,
} from './StatisticsStyles';

function Statistics({ title, stats }) {
  return (
    <Container>
      <Title>{title}</Title>

      <List>
        {listStyledComponents.map((Component, index) => (
          <Component>
            <ListLabel>{stats[index].label}</ListLabel>
            <ListPercentage>{stats[index].percentage}%</ListPercentage>
          </Component>
        ))}
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

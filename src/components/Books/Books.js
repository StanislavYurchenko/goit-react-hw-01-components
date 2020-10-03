import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  color: blue;
`;
const ListItem = styled.li`
  background-color: gray;
  cursor: pointer;
  &:hover {
    color: blue;
  }
  color: ${props => (props.isValue ? 'green' : 'red')};
`;

const isValue = true;

function Books({ books }) {
  return (
    <List>
      {books.map(book => (
        <ListItem isValue={isValue} key={book.id}>
          {book.name}
        </ListItem>
      ))}
    </List>
  );
}

Books.defaultProps = {
  name: 'book',
};

Books.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default Books;

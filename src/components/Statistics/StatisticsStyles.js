import styled from 'styled-components';

export const Container = styled.div`
  font-family: Helvetica, Arial, sans-serif;
  color: #24292e;
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  max-width: 250px;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 15px;
  text-transform: uppercase;
  padding: 30px;
  margin: 0;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  border-top: 1px solid grey;
  text-align: center;
`;

export const ListItem = styled.li`
  padding: 10px 0;
  flex-basis: auto;
  width: 25%;
  color: #fff;
`;

export const ListItemBlue = styled(ListItem)`
  background-color: blue;
`;

export const ListItemPurple = styled(ListItem)`
  background-color: purple;
`;

export const ListItemRed = styled(ListItem)`
  background-color: Red;
`;

export const ListItemGreen = styled(ListItem)`
  background-color: Green;
`;

export const ListLabel = styled.span`
  display: block;
  font-size: 12px;

  padding-bottom: 10px;
`;

export const ListPercentage = styled.span`
  display: block;
`;

export const listStyledComponents = [
  ListItemBlue,
  ListItemPurple,
  ListItemRed,
  ListItemGreen,
];

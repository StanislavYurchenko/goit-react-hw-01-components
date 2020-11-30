import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
  border-radius: 50%;
  margin-right: 10px;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

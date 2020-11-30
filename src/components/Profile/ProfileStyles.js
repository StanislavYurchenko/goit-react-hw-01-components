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

export const Description = styled.div`
  padding: 30px;
`;

export const Avatar = styled.img`
  margin: 0 auto 30px;
  border-radius: 50%;
  width: 100px;
`;

export const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 10px;
`;

export const Tag = styled.div`
  margin: 0 0 10px;
  font-weight: 300;
`;

export const Location = styled.div`
  margin: 0;
  font-weight: 300;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  background-color: #eee;
  border-top: 1px solid grey;
`;

export const ListItem = styled.ul`
  padding: 15px 0;
  flex-basis: auto;
  width: 33.333%;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
  &:not(:last-child) {
    border-right: 1px solid grey;
  }
`;

export const ListLabel = styled.span`
  text-align: center;
  display: block;
  font-size: 12px;
`;

export const ListQuantity = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 700;
`;

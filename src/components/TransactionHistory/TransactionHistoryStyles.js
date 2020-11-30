import styled from 'styled-components';

export const Table = styled.table`
  font-family: Helvetica, Arial, sans-serif;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  min-width: 400px;
  border-spacing: 1px;
  background: #dbdede;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
`;

export const THead = styled.thead``;

export const TBody = styled.tbody``;

export const TR = styled.tr`
  background-color: #fff;
  :nth-child(2n) {
    background-color: #e2eded;
  }
`;

export const TH = styled.th`
  width: 33.33%;
  background-color: #31cfd9;
  text-align: center;
  padding: 16px;
  text-transform: uppercase;
  color: #fff;
`;

export const TD = styled.td`
  width: 33.33%;
  text-align: center;
  padding: 16px;
`;

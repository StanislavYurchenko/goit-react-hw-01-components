import React from 'react';
import PropTypes, { string } from 'prop-types';
import styled from 'styled-components';

const Table = styled.table`
  font-family: Helvetica, Arial, sans-serif;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  min-width: 400px;
  border-spacing: 1px;
  background: #dbdede;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
`;
const THead = styled.thead``;
const TBody = styled.tbody``;
const TR = styled.tr`
  background-color: #fff;
  :nth-child(2n) {
    background-color: #e2eded;
  }
`;
const TH = styled.th`
  width: 33.33%;
  background-color: #31cfd9;
  text-align: center;
  padding: 16px;
  text-transform: uppercase;
  color: #fff;
`;
const TD = styled.td`
  width: 33.33%;
  text-align: center;
  padding: 16px;
`;

function TransactionHistory({ items }) {
  return (
    <Table>
      <THead>
        <TR>
          <TH>Type</TH>
          <TH>Amount</TH>
          <TH>Currency</TH>
        </TR>
      </THead>

      <TBody>
        {items.map(item => (
          <TR key={item.id}>
            <TD>{item.type}</TD>
            <TD>{item.amount}</TD>
            <TD>{item.currency}</TD>
          </TR>
        ))}
      </TBody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: string.isRequired,
      type: string.isRequired,
      amount: string.isRequired,
      currency: string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;

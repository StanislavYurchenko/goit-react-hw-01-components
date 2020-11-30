import React from 'react';
import PropTypes, { string } from 'prop-types';
import { Table, THead, TBody, TR, TH, TD } from './TransactionHistoryStyles';

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

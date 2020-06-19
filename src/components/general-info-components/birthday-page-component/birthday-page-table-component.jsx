import React from 'react';
import MaterialTable from 'material-table';

export default function BirthdayPageTableComponent() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Transaction ID', field: 'transactionid' },
      { title: 'Amount', field: 'amount' },
      { title: 'Payment Date', field: 'payment_date'},
      { title: 'Transaction Type',field: 'transaction_type'},
    ],
    data: [
      { transactionid: '1', amount: 25.00, payment_date: '06/19/2020', transaction_type: 'Gas' }
    ],
  });

  return (
    <MaterialTable
      title="Finance Information"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
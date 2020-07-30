import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import AutoTransactionService from '../../../services/auto-transaction-service';

export default function AutoFinancePageTableComponent() {
  const [state] = React.useState({
    columns: [
      { title: 'Transaction ID', field: 'autoTransactionId' },
      { title: 'Date', field: 'autoTransactionDate' },
      { title: 'Repair Shop Name', field: 'shopName'},
      { title: 'Amount',field: 'amount'},
      { title: 'Person Name', field: 'person'}
    ],
  });

  const [entries, setEntries] = useState({
    data: [
      {
        autoTransactionId: 0,
        autoTransactionDate: "",
        shopName: "",
        amount: 0,
        person: ""
      }
    ]
  });

  useEffect(() => {
    AutoTransactionService.getAllAutoTransations().then(response => {
      let data = [];
      response.data.forEach(e1 => {
        data.push({
          autoTransactionId: e1.autoTransactionId,
          autoTransactionDate: e1.autoTransactionDate,
          shopName: e1.shopName,
          amount: e1.amount,
          person: e1.person
        });
        console.log(data);
      });
      setEntries({ data: data })
    })
    .catch(function(error) {
      console.log(error);
    });
  }, []);


  return (
    <MaterialTable
      title="Auto Finances"
      columns={state.columns}
      data={entries.data}
      // editable={{
      //   onRowAdd: (newData) =>
      //     new Promise((resolve) => {
      //       setTimeout(() => {
      //         resolve();
      //         setState((prevState) => {
      //           const data = [...prevState.data];
      //           data.push(newData);
      //           return { ...prevState, data };
      //         });
      //       }, 600);
      //     }),
      //   onRowUpdate: (newData, oldData) =>
      //     new Promise((resolve) => {
      //       setTimeout(() => {
      //         resolve();
      //         if (oldData) {
      //           setState((prevState) => {
      //             const data = [...prevState.data];
      //             data[data.indexOf(oldData)] = newData;
      //             return { ...prevState, data };
      //           });
      //         }
      //       }, 600);
      //     }),
      //   onRowDelete: (oldData) =>
      //     new Promise((resolve) => {
      //       setTimeout(() => {
      //         resolve();
      //         setState((prevState) => {
      //           const data = [...prevState.data];
      //           data.splice(data.indexOf(oldData), 1);
      //           return { ...prevState, data };
      //         });
      //       }, 600);
      //     }),
      // }}
    />
  );
}
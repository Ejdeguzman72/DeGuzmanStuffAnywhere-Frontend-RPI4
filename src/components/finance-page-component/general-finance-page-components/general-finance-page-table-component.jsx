import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import GeneralTransactionService from '../../../services/general-tranascttion-service';

export default function GeneralFinancePageTableComponent() {
  const [entries,setEntries] = useState({
    data: [
      {
        transactionId: 0,
        amount: 0,
        paymentDate: "",
        entity: "",
        person: ""
      }
    ]
  });

  const [state] = React.useState({
    columns: [
      { title: 'Transaction ID', field: 'transactionId'},
      { title: 'Amount', field: 'amount' },
      { title: 'Payment Date', field: 'paymentDate'},
      { title: 'Entity',field: 'entity'},
      { title: 'Person', field: 'person'}
    ],
  });

  useEffect(() => {
    GeneralTransactionService.getAllGeneralTransactions().then(response => {
      let data = [];
      response.data.forEach(e1 => {
        data.push({
          transactionId: e1.transactionId,
          amount: e1.amount,
          paymentDate: e1.paymentDate,
          entity: e1.entity,
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
      title="General Finances"
      columns={state.columns}
      data={entries.data}
      editable={{
        // onRowAdd: (newData) =>
        //   new Promise((resolve) => {
        //     setTimeout(() => {
        //       resolve();
        //       setState((prevState) => {
        //         const data = [...prevState.data];
        //         data.push(newData);
        //         return { ...prevState, data };
        //       });
        //     }, 600);
        //   }),
        // onRowUpdate: (newData, oldData) =>
        //   new Promise((resolve) => {
        //     setTimeout(() => {
        //       resolve();
        //       if (oldData) {
        //         setState((prevState) => {
        //           const data = [...prevState.data];
        //           data[data.indexOf(oldData)] = newData;
        //           return { ...prevState, data };
        //         });
        //       }
        //     }, 600);
        //   }),
        // onRowDelete: (oldData) =>
        //   new Promise((resolve) => {
        //     setTimeout(() => {
        //       resolve();
        //       setState((prevState) => {
        //         const data = [...prevState.data];
        //         data.splice(data.indexOf(oldData), 1);
        //         return { ...prevState, data };
        //       });
        //     }, 600);
        //   }),
      }}
    />
  );
}
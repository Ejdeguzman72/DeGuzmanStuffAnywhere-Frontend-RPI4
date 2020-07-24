import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import MedicalTransactionService from '../../../services/medical-transaction-service';

export default function MedicalFinancePageTableComponent() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Medical Transaction ID', field: 'medicalTransactionId' },
      { title: 'Medical Facility', field: 'facillity' },
      { title: 'Amount', field: 'amount' },
      { title: 'Payment Date', field: 'medicalTransactionDate' },
      { title: 'Person', field: 'person' },
    ],
  });

  const [medicalTrxData, setMedicalTrxdata] = useState({
    data: [
      {
        medicalTransactionId: 0,
        facillity: "",
        amount: 0.00,
        medicalTransactionDate: "",
        person: ""
      }
    ]
  });

  useEffect(() => {
    MedicalTransactionService.getAllMedicalTransactions().then(response => {
      let data = [];
      response.data.forEach(e1 => {
        data.push({
          medicalTransactionId: e1.medicalTransactionId,
          facillity: e1.facillity,
          amount: e1.amount,
          medicalTransactionDate: e1.medicalTransactionDate,
          person: e1.person
        });
        console.log(data);
      });
      setMedicalTrxdata({ data: data });
    })
    .catch(function(error) {
      console.log(error);
    });
  }, []);


  return (
    <MaterialTable
      title="Medical Finances"
      columns={state.columns}
      data={medicalTrxData.data}
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
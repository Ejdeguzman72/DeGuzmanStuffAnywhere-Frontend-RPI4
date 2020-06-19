import React from 'react';
import MaterialTable from 'material-table';

export default function BirthdayPageTableComponent() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Person ID', field: 'person_id' },
      { title: 'First Name', field: 'firstname' },
      { title: 'Last Name', field: 'lastname'},
      { title: 'Birth Date',field: 'birthdate'},
      { title: 'Age', field: 'age'}
    ],
    data: [
      { person_id: '1', firstname: 'Edgar', lastname: 'DeGuzman', birthdate: '03/07/1996', age: 24 }
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
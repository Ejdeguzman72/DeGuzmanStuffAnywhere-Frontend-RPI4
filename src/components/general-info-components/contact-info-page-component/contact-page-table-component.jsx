import React from 'react';
import MaterialTable from 'material-table';

export default function ContactPageTableComponent() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'First Name', field: 'firstname' },
      { title: 'Last Name', field: 'lastname' },
      { title: 'Phone', field: 'phone', type: 'text' },
      { title: 'Email',field: 'email'
      },
    ],
    data: [
      { firstname: 'Edgar', lastname: 'DeGUzman', phone: '201-546-0750', email: 'ejdeguzman72@outlook.com' }
    ],
  });

  return (
    <MaterialTable
      title="Contact Information"
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
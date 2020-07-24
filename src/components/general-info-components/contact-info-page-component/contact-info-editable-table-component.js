import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import TableBody from 'material-table';
import ContactInfoService from '../../../services/contact-info-service';

export default function ContactInfoEditableTableComponent() {
  const [entries, setEntries] = useState({
    data: [
      {
        personid: 0,
        birthdate: "",
        email: "",
        firstname: "",
        lastname: "",
        phone: ""
      }
    ]
  });

  const [state] = React.useState({
    columns: [
      { title: 'Person ID No:', field: 'personid', headerStyle:{backgroundColor:'#CCD6DD'} },
      { title: 'Birth Date', field: 'birthdate', headerStyle:{backgroundColor:'#CCD6DD'} },
      { title: 'Email', field: 'email', headerStyle:{backgroundColor:'#CCD6DD'}},
      { title: 'Firstname', field: 'firstname', headerStyle:{backgroundColor:'#CCD6DD'} },
      { title: 'Lastname', field: 'lastname', headerStyle:{backgroundColor:'#CCD6DD'} },
      { title: 'Phone', field: 'phone', headerStyle:{backgroundColor:'#CCD6DD'}, }
    ]
  });

  useEffect(() => {
    ContactInfoService.getContactInfo().then(response => {
      let data = [];
      response.data.forEach(e1 => {
        data.push({
          personid: e1.personid,
          birthdate: e1.birthdate,
          email: e1.email,
          firstname: e1.firstname,
          lastname: e1.lastname,
          phone: e1.phone
        });
        console.log(data);
      });
      setEntries({ data: data });
    })
    .catch(function(error) {
      console.log(error);
    });
  }, []);


  return (
    <MaterialTable
      title="Contact Information"
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
  )
}

import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import UsersService from '../../../services/users-info-service';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Axios from 'axios';
import Box from '@material-ui/core/Box';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref ) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

const api = Axios.create({
  baseURL: 'localhost:8080/app/users'
});

export default function AdminPortalPendingUsersTableComponent() {
  const [entries, setEntries] = useState({
    data: [
      {
        userid: 0,
        username: "",
        password: "",
        name: "",
        user_status: 0,
        roleid: 0
      }
    ]
  });

  const [state] = React.useState({
    columns: [
      { title: 'User ID', field: 'userid'},
      { title: 'Username', field: 'username' },
      { title: 'Password', field: 'password', hidden: true },
      { title: 'Name', field: 'name' },
      { title: 'User Status', field: 'user_status' }
    ],
  });

  useEffect(() => {
    UsersService.getAllPendingUsersService()
      .then(response => {
        let data = [];
        response.data.forEach(e1 => {
          data.push({
            userid: e1.userid,
            username: e1.username,
            password: e1.password,
            name: e1.name,
            user_status: e1.user_status,
            role_id: e1.role_id
          });
          console.log(data);
        });
        setEntries({ data: data })
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleRowUpdate = (newData, oldData, resolve) => {
    console.log(oldData.userid + "this is old data");
    console.log(newData.userid + "this is new data");
    Axios.put(`localhost:8080/app/users/${newData.userid}`, newData)
      .then(res => {
        const dataUpdate = [...entries];
        const index = oldData.tableData.userid;
        dataUpdate[index] = newData;
        setEntries([...dataUpdate]);
        resolve();
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
        resolve();
      })
  }

  // const handleRowDelete = (oldData, resolve) => {
  //   console.log(oldData.userid);
  //   Axios.delete(`localhost:8080/app/users/${oldData.userid}`)
  //     .then(res => {
  //       const dataDelete = [...entries.data];
  //       const index = oldData.tableData.userid;
  //       dataDelete.splice(index, 1);
  //       setEntries([...dataDelete]);
  //       resolve();
  //       window.location.reload();
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  // const handleRowAdd = (newData, resolve) => {
  //   Axios.post("localhost:8080/app/users/add-user-information", newData)
  //     .then(res => {
  //       console.log(newData + "this is newData");
  //       let dataToAdd = [...entries.data];
  //       console.log(api + "this is api");
  //       console.log(dataToAdd + "this is dataTo");
  //       dataToAdd.push(newData);
  //       setEntries(dataToAdd);
  //       resolve();
  //       window.location.reload();
  //     });
  // }

  return (
    <div>
      <Box border={3} borderRadius={16}>
        <MaterialTable
          title="Approve Users"
          columns={state.columns}
          data={entries.data}
          icons={tableIcons}
          editable={{
        //     onRowAdd: (newData) =>
        //       new Promise((resolve) => {
        //         handleRowAdd(newData, resolve)
        //       }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                handleRowUpdate(newData, oldData, resolve);
              }),
        //     onRowDelete: (oldData) =>
        //       new Promise((resolve) => {
        //         handleRowDelete(oldData, resolve);
        //       })
          }}
        />
      </Box>

    </div>
  )
}
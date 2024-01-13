import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import UserService from '../../services/UsersInfoService';
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
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
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
  baseURL: 'http://192.168.1.36:8080/app/users'
});

export default function AdminPortalPageUserTableComponent() {
  const [entries, setEntries] = useState({
    data: [
      {
        user_id: 0,
        name: "",
        username: "",
        password: "",
        email: "",
        user_status_descr: "",
        role_descr: ""
      }
    ]
  });

  const [state] = React.useState({
    columns: [
      { title: 'User ID', field: 'user_id'},
      { title: 'Name', field: 'name' },
      { title: 'Username', field: 'username' },
      { title: 'Password', field: 'password', hidden: true },
      { title: 'Email',field: 'email'},
      { title: 'User Status', field: 'user_status_descr' },
      { title: 'Role', field: 'role_descr'}
    ],
  });

  useEffect(() => {
    UserService.getAllUsersService()
      .then(response => {
        let data = [];
        response.data.forEach(e1 => {
          data.push({
            user_id: e1.userid,
            name: e1.name,
            username: e1.username,
            password: e1.password,
            email: e1.email,
            role_descr: e1.role_descr,
            user_status_descr: e1.user_status_descr
          });
          console.log(e1.user_id);
        });
        setEntries({ data: data })
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleRowUpdate = (newData, oldData, resolve) => {
    console.log(oldData.user_id + "this is old data");
    console.log(newData.user_id + "this is new data");
    Axios.put(`http://192.168.1.36:8080/app/users/${newData.user_id}`, newData)
      .then(res => {
        const dataUpdate = [...entries];
        const index = oldData.tableData.user_id;
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

  const handleRowDelete = (oldData, resolve) => {
    console.log(oldData.userid);
    Axios.delete(`http://192.168.1.36:8080/app/users/${oldData.user_id}`)
      .then(res => {
        const dataDelete = [...entries.data];
        const index = oldData.tableData.user_id;
        dataDelete.splice(index, 1);
        setEntries([...dataDelete]);
        resolve();
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handleRowAdd = (newData, resolve) => {
    Axios.post("http://192.168.1.36:8080/app/users/add-user-information", newData)
      .then(res => {
        console.log(newData + "this is newData");
        let dataToAdd = [...entries.data];
        console.log(api + "this is api");
        console.log(dataToAdd + "this is dataTo");
        dataToAdd.push(newData);
        setEntries(dataToAdd);
        resolve();
        window.location.reload();
      })
  }

  return (
    <div>
      <Box border={3} borderRadius={16}>
        <MaterialTable
          title="Manage Users"
          columns={state.columns}
          data={entries.data}
          icons={tableIcons}
        //   editable={{
        //     onRowAdd: (newData) =>
        //       new Promise((resolve) => {
        //         handleRowAdd(newData, resolve)
        //       }),
        //     onRowUpdate: (newData, oldData) =>
        //       new Promise((resolve) => {
        //         handleRowUpdate(newData, oldData, resolve);
        //       }),
        //     onRowDelete: (oldData) =>
        //       new Promise((resolve) => {
        //         handleRowDelete(oldData, resolve);
        //       })
        //   }}
        />
      </Box>

    </div>
  )
}
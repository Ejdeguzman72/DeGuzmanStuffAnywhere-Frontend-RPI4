import React, { useState, useEffect } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import MaterialTable from 'material-table';
import TableBody from 'material-table';
import ContactInfoService from '../../../services/ContactInfoService';
import Box from '@material-ui/core/Box';
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
import AddContactModalComponent from './AddContactModalComponent';
import ExportContactInfoCSV from './ExportContactInfoCSV';
import ContactOptionsDropdown from '../../dropdown-components/ContactOptionsDropdown';

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

export default function ContactInfoEditableTableComponent() {
  const [entries, setEntries] = useState({
    data: [
      {
        personId: 0,
        firstname: "",
        middleInitial: "",
        lastname: "",
        address01: "",
        address02: "",
        city: "",
        state: "",
        zipcode: "",
        birthdate: "",
        age: 0,
        email: "",
        phone: "",
      }
    ]
  });

  const [state] = React.useState({
    columns: [
      { title: 'Person ID No:', field: 'personId', hidden: false},
      { title: 'Firstname', field: 'firstname'},
      { title: 'Middle Initial', field: 'middleInitial'},
      { title: 'Lastname', field: 'lastname'},
      { title: 'Address_01', field: 'address01'},
      { title: 'Address_02', field: 'address02'},
      { title: 'City', field: 'city'},
      { title: 'State', field: 'state'},
      { title: 'Zip', field: 'zipcode'},
      { title: 'Birth Date', field: 'birthdate'},
      { title: 'Age', field: 'age'},
      { title: 'Email', field: 'email'},
      { title: 'Phone', field: 'phone'}
    ]
  });

  useEffect(() => {
    ContactInfoService.getContactInfo().then(response => {
      let data = [];
      response.data.list.forEach(e1 => {
        data.push({
          personId: e1.personId,
          firstname: e1.firstname,
          middleInitial: e1.middleInitial,
          lastname: e1.lastname,
          address01: e1.address01,
          address02: e1.address02,
          city: e1.city,
          state: e1.state,
          zipcode: e1.zipcode,
          birthdate: e1.birthdate,
          age: e1.age,
          email: e1.email,
          phone: e1.phone,
        });
      });
      setEntries({ data: data });
    })
      .catch(function (error) {
        console.log(error);
      });
  }, []);


  const handleRowAdd = (newData, resolve) => {
    if (newData.firstname === null) {
      alert("First name entry is required");
    }
    Axios.post('http://localhost:8080/app/person-info/add-person-information', newData)
      .then(res => {
        let dataToAdd = [...entries.data];
        dataToAdd.push(newData);
        setEntries(dataToAdd);
        resolve();
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
        resolve();
      });
  }

  const handleRowDelete = (oldData, resolve) => {
    Axios.delete(`http://localhost:8080/app/person-info/person/${oldData.personId}`)
      .then(res => {
        const dataDelete = [...entries.data];
        const index = oldData.tableData.personId;
        dataDelete.splice(index, 1);
        setEntries([...dataDelete]);
        resolve();
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
        resolve();
      });
  }

  const handleRowUpdate = (newData, oldData, resolve) => {
    Axios.put(`http://localhost:8080/app/person-info/person/${oldData.personId}`, newData)
      .then(res => {
        const dataUpdate = [...entries.data];
        const index = oldData.tabledata.personId;
        dataUpdate[index] = newData;
        setEntries([...dataUpdate]);
        resolve();
      })
      .catch(error => {
        console.log(error);
        resolve();
        window.reload();
      });
  }

  const [fileName, setFileName] = useState("Contact Info");

  return (
    <div>
      <Row>
        <Col md={4}>
          <AddContactModalComponent />
        </Col>
        <Col md={4}>
          <ContactOptionsDropdown />
        </Col>
        <Col md={2}>
        </Col>
        <Col md={1}>
          <ExportContactInfoCSV csvData={entries.data} fileName={fileName} />
        </Col>
        <Col md={1}>
        </Col>
      </Row>
      <br></br>
      <Box border={5} borderRadius={16}>
        <MaterialTable
          title="Contact Information"
          columns={state.columns}
          data={entries.data}
          icons={tableIcons}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                handleRowAdd(newData, resolve)
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve) => {
                handleRowUpdate(newData, oldData, resolve)
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve) => {
                handleRowDelete(oldData, resolve)
              }),
          }}
        />
      </Box>
    </div>
  )
}

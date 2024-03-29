import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import MedicalOfficeService from '../../services/MedicalOfficeService';
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
import Box from '@material-ui/core/Box';
import { Col,Row } from 'react-bootstrap';
import ExportMedicalFinanceCSV from './ExportMedicalOfficeCSV';
import AddMedicalFinanceModalComponent from './AddMedicalOfficeModalComponent';
import MedicalOfficeOptionsDropdown from '../dropdown-components/MedicalOfficeOptionsDropdown';

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

export default function MedicalOfficeTableComponent() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Medical Office ID', field: 'medicalOfficeId', hidden: true },
      { title: 'Name of Facility', field: 'name' },
      { title: 'Address', field: 'address' },
      { title: 'City', field: 'city' },
      { title: 'State', field: 'state'},
      { title: 'zip', field: 'zip'}
    ],
  });

  const [medicalOffice, setMedicalOffice] = useState({
    data: [
      {
        medicalOfficeId: 0,
        amount: 0.00,
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
      }
    ]
  });

  const [fileName] = useState("Medical_Offices");

  useEffect(() => {
    MedicalOfficeService.getAllMedicalOffices().then(response => {
      let data = [];
      response.data.list.forEach(e1 => {
        data.push({
          medicalOfficeId: e1.medicalOfficeId,
          name: e1.name,
          address: e1.address,
          city: e1.city,
          state: e1.state,
          zip: e1.zip,
        });
      });
      setMedicalOffice({ data: data });
    })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleRowAdd = (newData, resolve) => {
    MedicalOfficeService.addMedicalOffice(newData)
      .then(res => {
        let dataToAdd = [...medicalOffice.data];
        dataToAdd.push(newData);
        setMedicalOffice(dataToAdd);
        resolve();
        window.location.reload();
      });
  }

  const handleRowUpdate = (newData, oldData, resolve) => {
    MedicalOfficeService.updateMedicalOfficeInformation(oldData.medicalOfficeId)
      .then(res => {
        const dataUpdate = [...medicalOffice.data];
        const index = oldData.tabledata.medicalOfficeId;
        dataUpdate[index] = newData;
        setMedicalOffice([...dataUpdate]);
        resolve();
      })
      .catch(error => {
        console.log(error);
        resolve();
      });
  }

  const handleRowDelete = (oldData, resolve) => {
    MedicalOfficeService.deleteMedicalOffice(oldData.medicalOfficeId)
      .then(res => {
        const dataDelete = [...medicalOffice.data];
        const index = medicalOffice.medicalOfficeId
        dataDelete.splice(index, 1);
        setMedicalOffice([...dataDelete]);
        resolve();
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
        resolve();
      });
  }

  return (
    <div>
    <Row>
        <Col md={4}>
        <AddMedicalFinanceModalComponent />
        </Col>
        <Col md={4}>
          <MedicalOfficeOptionsDropdown />
        </Col>
        <Col md={2}>
          
        </Col>
        <Col md={1}>
          <ExportMedicalFinanceCSV csvData={medicalOffice.data} fileName={fileName} />
        </Col>
      </Row>
      <br></br>
    <Box border={3} borderRadius={16}> 
      <MaterialTable
        title="Medical Office"
        columns={state.columns}
        data={medicalOffice.data}
        icons={tableIcons}
        editable={{
          // onRowAdd: (newData) =>
          //   new Promise((resolve) => {
          //     handleRowAdd(newData, resolve)
          //   }),
          // onRowUpdate: (newData, oldData) =>
          //   new Promise((resolve) => {
          //     handleRowUpdate(newData, oldData, resolve)
          //   }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              handleRowDelete(oldData, resolve)
            }),
        }}
      />
    </Box>
    </div>
  );
}
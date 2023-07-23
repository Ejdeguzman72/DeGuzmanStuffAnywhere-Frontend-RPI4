import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import MedicalTransactionService from '../../../services/medical-transaction-service';
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
import { Col,Row } from 'react-bootstrap';
import ExportMedicalFinanceCSV from './ExportMedicalFinanceCSV';
import AddMedicalFinanceModalComponent from './AddMedicalTransactionModalComponent';
import MedicalOfficeOptionsDropdown from '../../dropdown-components/MedicalOfficeOptionsDropdown';

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

export default function MedicalFinancePageTableComponent() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Medical Transaction ID', field: 'medTrxId', hidden: false },
      { title: 'Amount', field: 'amount' },
      { title: 'Payment Date', field: 'medTrxDate' },
      { title: 'Medical Facility', field: 'facilityName' },
      { title: 'Address', field: 'address'},
      { title: 'City', field: 'city'},
      { title: 'State', field: 'state'},
      { title: 'zip', field: 'zip'},
      { title: 'Transaction Type', field: 'transactionTypeDescr'},
      { title: 'Name of User', field: 'username' },
    ],
  });

  const [medicalTrxData, setMedicalTrxdata] = useState({
    data: [
      {
        medTrxId: 0,
        amount: 0.00,
        medTrxDate: "",
        facilityName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        transaction_type_descr: "",
        username: ""
      }
    ]
  });

  const [fileName] = useState("Medical_Finance");

  useEffect(() => {
    MedicalTransactionService.getAllMedicalTransactions().then(response => {
      let data = [];
      response.data.list.forEach(e1 => {
        data.push({
          medTrxId: e1.medTrxId,
          amount: e1.amount.toFixed(2),
          medTrxDate: e1.medTrxDate,
          facilityName: e1.facilityName,
          address: e1.address,
          city: e1.city,
          state: e1.state,
          zip: e1.zip,
          transactionTypeDescr: e1.transactionTypeDescr,
          username: e1.username
        });
      });
      setMedicalTrxdata({ data: data });
      console.log(data)
    })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleRowAdd = (newData, resolve) => {
    Axios.post('http://localhost:8080/app/medical-transactions/add-medical-transaction', newData)
      .then(res => {
        console.log(newData + "this is newData");
        let dataToAdd = [...medicalTrxData.data];
        dataToAdd.push(newData);
        setMedicalTrxdata(dataToAdd);
        resolve();
        window.location.reload();
      });
  }

  const handleRowUpdate = (newData, oldData, resolve) => {
    Axios.put(`http://localhost:8080/app/medical-transactions/medical-transaction/${oldData.medical_transaction_id}`)
      .then(res => {
        const dataUpdate = [...medicalTrxData.data];
        const index = oldData.tabledata.medicalTransactionId;
        dataUpdate[index] = newData;
        setMedicalTrxdata([...dataUpdate]);
        resolve();
      })
      .catch(error => {
        console.log(error);
        resolve();
      });
  }

  const handleRowDelete = (oldData, resolve) => {
    Axios.delete(`http://localhost:8080/app/medical-transactions/medical-transaction/${oldData.medical_transaction_id}`)
      .then(res => {
        const dataDelete = [...medicalTrxData.data];
        const index = oldData.tabledata.medical_transaction_id;
        dataDelete.splice(index, 1);
        setMedicalTrxdata([...dataDelete]);
        resolve();
        window.reload();
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
          <ExportMedicalFinanceCSV csvData={medicalTrxData.data} fileName={fileName} />
        </Col>
      </Row>
      <br></br>
    <Box border={3} borderRadius={16}> 
      <MaterialTable
        title="Medical Finances"
        columns={state.columns}
        data={medicalTrxData.data}
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
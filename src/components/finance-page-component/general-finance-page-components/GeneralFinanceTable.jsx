import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import MaterialTable from 'material-table';
import GeneralTransactionService from '../../../services/GeneralTrxService';
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
import ExportGeneralFinanceCSV from './ExportGeneralFinanceCSV';
import { Row, Col } from 'react-bootstrap';
import AddGeneralFinanceModalComponent from '../general-finance-page-components/AddGeneralFinanceModalComponent';
import GeneralTrxOptionsDropdown from '../../dropdown-components/GeneralTrxOptionsDropdown';

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
  baseURL: 'http://localhost:8080/app/general-transactions'
});

export default function GeneralFinanceTable() {
  const [entries, setEntries] = useState({
    data: [
      {
        genTrxId: 0,
        amount: 0,
        paymentDate: "",
        entity: "",
        transactionTypeDescr: "",
        username: ""
      }
    ]
  });

  const [fileName, setFileName] = useState("General_Finance")

  const [state] = React.useState({
    columns: [
      { title: 'Transaction ID', field: 'genTrxId', hidden: false },
      { title: 'Amount', field: 'amount' },
      { title: 'Payment Date', field: 'paymentDate' },
      { title: 'Entity', field: 'entity' },
      { title: 'Transaction Type', field: 'transactionTypeDescr' },
      { title: 'User', field: 'username' }
    ],
  });

  useEffect(() => {
    GeneralTransactionService.getAllGeneralTransactions()
      .then(response => {
        let data = [];
        response.data.list.forEach(e1 => {
          data.push({
            genTrxId: e1.genTrxId,
            amount: e1.amount.toFixed(2),
            paymentDate: e1.paymentDate,
            entity: e1.entity,
            transactionTypeDescr: e1.transactionTypeDescr,
            username: e1.username
          });
          // console.log(data);
        });
        setEntries({ data: data })
      })
      .catch(function (error) {
        // console.log(error);
      });
  }, []);

  const handleRowUpdate = (newData, oldData, resolve) => {
    GeneralTransactionService.updateTransactionInformation(oldData.genTrxId, newData)
      .then(res => {
        const dataUpdate = [...entries];
        const index = oldData.tableData.genTrxId;
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
    GeneralTransactionService.deleteTransaction(oldData.genTrxId)
      .then(res => {
        const dataDelete = [...entries.data];
        const index = oldData.tableData.genTrxId;
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
    GeneralTransactionService.addGeneralTransactionInformation(newData)
      .then(res => {
        let dataToAdd = [...entries.data];
        dataToAdd.push(newData);
        setEntries(dataToAdd);
        resolve();
        window.location.reload();
      })
  }

  return (
    <div>
      <Row>
        <Col md={4}>
          <AddGeneralFinanceModalComponent />
        </Col>
        <Col md={4}>
          <GeneralTrxOptionsDropdown />
        </Col>
        <Col md={2}>

        </Col>
        <Col md={1}>
          <ExportGeneralFinanceCSV csvData={entries.data} fileName={fileName} />
        </Col>
      </Row>
      <br></br>
      <Box border={3} borderRadius={16}>
        <MaterialTable
          title="General Finances"
          columns={state.columns}
          data={entries.data}
          icons={tableIcons}
          editable={{
            // onRowAdd: (newData) =>
            //   new Promise((resolve) => {
            //     handleRowAdd(newData, resolve)
            //   }),
            // onRowUpdate: (newData, oldData) =>
            //   new Promise((resolve) => {
            //     handleRowUpdate(newData, oldData, resolve);
            //   }),
            // onRowDelete: (oldData) =>
            //   new Promise((resolve) => {
            //     handleRowDelete(oldData, resolve);
            //   })
          }}
        />
      </Box>

    </div>
  )
}
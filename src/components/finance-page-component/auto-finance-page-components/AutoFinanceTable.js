import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import AutoTransactionService from '../../../services/AutoTrxService';
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
import ExportAutoFinanceCSV from './ExportAutoFinanceCSV';
import { Col, Row } from 'react-bootstrap';
import AddAutoTransactionModalComponent from './AddAutoTransactionModalComponent';
import AutoTrxOptionsDropdown from '../../dropdown-components/AutoTrxOptionsDropdown';

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

export default function AutoFinanceTable() {
  const [state] = React.useState({
    columns: [
      { title: 'Transaction ID', field: 'autoTrxId', hidden: false },
      { title: 'Amount', field: 'amount' },
      { title: 'Date', field: 'autoTrxDate' },
      { title: 'Make', field: 'make' },
      { title: 'Model', field: 'model' },
      { title: 'Year', field: 'year' },
      { title: 'Auto Shop Name', field: 'autoShopName' },
      { title: 'Name of User', field: 'username' },
      { title: 'Transaction Type', field: 'transactionTypeDescr' },
    ],
  });

  const [entries, setEntries] = useState({
    data: [
      {
        autoTrxId: 0,
        amount: 0,
        autoTrxDate: "",
        make: "",
        model: "",
        year: "",
        autoShopName: "",
        username: "",
        transactionTypeDescr: "",
      }
    ]
  });

  const [fileName] = useState("Auto_Transaction");

  useEffect(() => {
    AutoTransactionService.getAllAutoTransactions().then(response => {
      let data = [];
      response.data.list.forEach(e1 => {
        data.push({
          autoTrxId: e1.autoTrxId,
          amount: e1.amount.toFixed(2),
          autoTrxDate: e1.autoTrxDate,
          make: e1.make,
          model: e1.model,
          year: e1.year,
          autoShopName: e1.autoShopName,
          username: e1.username,
          transactionTypeDescr: e1.transactionTypeDescr,
        });
        console.log(data)
      });
      setEntries({ data: data })
    })
      .catch(function (error) {
        console.log(error);
        alert('Application is facing issue: ' + error);
      });
  }, []);

  const handleRowAdd = (newData, resolve) => {
    AutoTransactionService.addAutoTransactionInformation(newData)
      .then(res => {
        let dataToAdd = [...entries.data]
        dataToAdd.push(newData);
        setEntries(dataToAdd)
        resolve();
        window.location.reload();
      })
  }

  const handleRowUpdate = (newData, oldData, resolve) => {
    AutoTransactionService.updateAutoTransaction(oldData.autoTrxId,newData)
      .then(res => {
        const dataUpdate = [...entries.data];
        const index = oldData.tabledata.autoTransactionId;
        dataUpdate[index] = newData;
        setEntries([...dataUpdate]);
        resolve();
      })
      .catch(error => {
        console.log(error);
        resolve();
      });
  }

  const handleRowDelete = (oldData, resolve) => {
    console.log(oldData.tableData.autoTransactionId);
    AutoTransactionService.deleteAutoTransaction(oldData.autoTrxId)
      .then(res => {
        const dataDelete = [...entries.data];
        const index = oldData.tableData.autoTransactionId;
        dataDelete.splice(index, 1);
        setEntries([...dataDelete]);
        resolve();

        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <Row>
        <Col md={4}>
          <AddAutoTransactionModalComponent />
        </Col>
        <Col md={4}>
          <AutoTrxOptionsDropdown />
        </Col>
        <Col md={2}>
        </Col>
        <Col md={1}>
          <ExportAutoFinanceCSV csvData={entries.data} fileName={fileName} />
        </Col>
      </Row>
      <br></br>
      <Box border={3} borderRadius={16}>
        <MaterialTable
          title="Auto Finances"
          icons={tableIcons}
          columns={state.columns}
          data={entries.data}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                handleRowAdd(newData, resolve)
              }),
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
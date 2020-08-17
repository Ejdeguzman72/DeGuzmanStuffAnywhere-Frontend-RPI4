import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import AutoTransactionService from '../../../services/auto-transaction-service';
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

export default function AutoFinancePageTableComponent() {
  const [state] = React.useState({
    columns: [
      { title: 'Transaction ID', field: 'autoTransactionId' },
      { title: 'Date', field: 'autoTransactionDate' },
      { title: 'Repair Shop Name', field: 'shopName'},
      { title: 'Amount',field: 'amount'},
      { title: 'Person Name', field: 'person'}
    ],
  });

  const [entries, setEntries] = useState({
    data: [
      {
        autoTransactionId: 0,
        autoTransactionDate: "",
        shopName: "",
        amount: 0,
        person: ""
      }
    ]
  });

  useEffect(() => {
    AutoTransactionService.getAllAutoTransations().then(response => {
      let data = [];
      response.data.forEach(e1 => {
        data.push({
          autoTransactionId: e1.autoTransactionId,
          autoTransactionDate: e1.autoTransactionDate,
          shopName: e1.shopName,
          amount: e1.amount,
          person: e1.person
        });
        console.log(data);
      });
      setEntries({ data: data })
    })
    .catch(function(error) {
      console.log(error);
    });
  }, []);


  return (
    <MaterialTable
      title="Auto Finances"
      icons={tableIcons}
      columns={state.columns}
      data={entries.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
         
          }),
      }}
    />
  );
}
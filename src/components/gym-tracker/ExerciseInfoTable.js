import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import ExerciseService from '../../services/ExerciseService';
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
import ExportExerciseInfoCSV from './ExportExerciseInfoCSV';
import { Col,Row } from 'react-bootstrap';


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

export default function ExerciseInfoTableComponent() {
  const [state] = React.useState({
    columns: [
      { title: 'Exercise ID', field: 'exerciseid', hidden: true },
      { title: 'Exercise Name', field: 'exerciseName' },
      { title: 'Reps', field: 'reps' },
      { title: 'Sets', field: 'sets'},
      { title: 'Weight', field: 'weight'},
      { title: 'Exercise Type', field: 'exerciseType' },
      { title: 'Name', field: 'user' },
    ],
  });

  const [entries, setEntries] = useState({
    data: [
      {
        exerciseid: 0,
        exerciseName: 0,
        reps: "",
        sets: "",
        weight: "",
        exerciseType: "",
        user: "",
      }
    ]
  });

  const [fileName, setFileName] = useState("Exercise Info");

  useEffect(() => {
    ExerciseService.GetAllExercise().then(response => {
      let data = [];
      response.data.forEach(e1 => {
        data.push({
          exerciseid: e1.exerciseid,
          exerciseName: e1.exerciseName,
          reps: e1.reps,
          sets: e1.sets,
          weight: e1.weight,
          exerciseType: e1.exerciseType.exerciseTypeName,
          user: e1.user.name,
        });
      });
      setEntries({ data: data })
    })
      .catch(function (error) {
        console.log(error);
        alert('Application is facing issue: ' + error);
      });
  }, []);

  const handleRowAdd = (newData, resolve) => {
    Axios.post('localhost:8080/app/auto-transactions/add-auto-transaction-information', newData)
      .then(res => {
        let dataToAdd = [...entries.data]
        dataToAdd.push(newData);
        setEntries(dataToAdd)
        resolve();
        window.location.reload();
      })
  }

  const handleRowUpdate = (newData, oldData, resolve) => {
    Axios.put(`localhost:8080/app/auto-transactions/update-auto-transaction/${oldData.autoTransactionId}`)
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
    Axios.delete(`localhost:8080/app/auto-transactions/auto-transaction/${oldData.autoTransactionId}`)
      .then(res => {
        const dataDelete = [...entries.data];
        const index = oldData.tableData.autoTransactionId;
        dataDelete.splice(index, 1);
        setEntries([...dataDelete]);
        resolve();
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <Row>
        <Col md={4}>

        </Col>
        <Col md={5}>

        </Col>
        <Col md={3}>
          {/* <AddAutoTransactionModalComponent /> */}
          <ExportExerciseInfoCSV csvData={entries.data} fileName={fileName} />
        </Col>
      </Row>
      <br></br>
      <Box border={5} borderRadius={16}>
        <MaterialTable
          title="Exercise Info"
          icons={tableIcons}
          columns={state.columns}
          data={entries.data}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve) => {
                handleRowAdd(newData, resolve)
              }),
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
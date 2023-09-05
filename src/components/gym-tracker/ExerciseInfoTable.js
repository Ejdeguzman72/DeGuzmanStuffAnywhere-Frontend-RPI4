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
import AddExerciseModal from './AddExerciseInfoModal';
import { Col, Row } from 'react-bootstrap';
import GymOptionsDropdown from '../dropdown-components/GymOptionsDropdown';
import ExportToCSV from './ExportToCsv';

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
      { title: 'Exercise ID', field: 'exercise_id', hidden: true },
      { title: 'Exercise Name', field: 'exerciseName' },
      { title: 'Sets', field: 'sets' },
      { title: 'Reps', field: 'reps' },
      { title: 'Weight', field: 'weight' },
      { title: 'Date', field: 'date' },
      { title: 'Exercise Type', field: 'exerciseTypeName' },
      { title: 'Name', field: 'username' },
    ],
  });

  const [entries, setEntries] = useState({
    data: [
      {
        exercise_id: 0,
        exerciseName: "",
        sets: "",
        reps: "",
        weight: "",
        date: "",
        exerciseTypeName: "",
        username: "",
      }
    ]
  });

  const [fileName, setFileName] = useState("Exercise Info");

  useEffect(() => {
    ExerciseService.GetAllExercise().then(response => {
      let data = [];
      response.data.list.forEach(e1 => {
        data.push({
          exercise_id: e1.exercise_id,
          exerciseName: e1.exerciseName,
          sets: e1.sets,
          reps: e1.reps,
          weight: e1.weight,
          date: e1.date,
          exerciseTypeName: e1.exerciseTypeName,
          username: e1.username
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
    ExerciseService.addExerciseInformation(newData)
      .then(res => {
        let dataToAdd = [...entries.data]
        dataToAdd.push(newData);
        setEntries(dataToAdd)
        resolve();
        window.location.reload();
      })
  }

  const handleRowUpdate = (newData, oldData, resolve) => {
    ExerciseService.updateExerciseinformation(oldData.exercise_id,newData)
      .then(res => {
        const dataUpdate = [...entries.data];
        const index = oldData.tabledata.exercise_id;
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
    ExerciseService.deleteExercise(oldData.exercise_id)
      .then(res => {
        const dataDelete = [...entries.data];
        const index = oldData.tableData.exercise_id;
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

  return (
    <div>
      <Row>
        <Col md={4}>
          <AddExerciseModal />
        </Col>
        <Col md={4}>
          <GymOptionsDropdown />
        </Col>
        <Col md={1}>

        </Col>
        <Col md={2}>
          <ExportToCSV />
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
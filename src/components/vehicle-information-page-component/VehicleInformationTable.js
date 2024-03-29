import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import VehicleInformationService from '../../services/VehicleInformationService';
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
import ExportCarInformationCSV from './ExportVehicleInfoCSV';
import { Col, Row } from 'react-bootstrap';
import AddCarInfoModalComponent from './AddVehicleInfoModalComponent';
import VehicleOptionsDropdown from '../dropdown-components/VehicleOptionsDropdown';

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

export default function ViewCarsTableComponent() {
  const [state] = React.useState({
    columns: [
      { title: 'Vehicle ID', field: 'vehicleId', hidden: true },
      { title: 'Make', field: 'make' },
      { title: 'Model', field: 'model' },
      { title: 'Year', field: 'year' },
      { title: 'Capacity', field: 'capacity' },
      { title: 'Transmission', field: 'transmission' }
    ],
  });

  const [entries, setEntries] = useState({
    data: [
      {
        vehicleId: 0,
        make: "",
        model: "",
        year: "",
        capacity: 0,
        transmission: "",
      }
    ]
  });

  const [fileName, setFileName] = useState("Car Information");

  useEffect(() => {
    VehicleInformationService.getAllVehicleInformation().then(response => {
      let data = [];
      response.data.list.forEach(e1 => {
        data.push({
          vehicleId: e1.vehicleId,
          make: e1.make,
          model: e1.model,
          year: e1.year,
          capacity: e1.capacity,
          transmission: e1.transmission
        });
      });
      setEntries({ data: data })
    })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleRowAdd = (newData, resolve) => {
    VehicleInformationService.add
      .then(res => {
        let dataToAdd = [...entries.data]
        dataToAdd.push(newData);
        setEntries(dataToAdd)
        resolve();
        window.location.reload();
      })
  }

  const handleRowUpdate = (newData, oldData, resolve) => {
    VehicleInformationService.updateVehicleInformation(oldData.vehicleId,newData)
      .then(res => {
        const dataUpdate = [...entries.data];
        const index = oldData.tabledata.vehicleId;
        dataUpdate[index] = newData;
        setEntries([...dataUpdate]);
        resolve();
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
        resolve();
      });
  }

  const handleRowDelete = (oldData, resolve) => {
    console.log(oldData.tableData.vehicleId);
    VehicleInformationService.deleteVehicle(oldData.vehicleId)
      .then(res => {
        const dataDelete = [...entries.data];
        const index = oldData.tableData.vehicleId;
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
        <Col md={2}>
          < AddCarInfoModalComponent />
        </Col>
        <Col md={8}>
          <VehicleOptionsDropdown />
        </Col>
        <Col md={1}>
          <ExportCarInformationCSV csvData={entries.data} fileName={fileName} />
        </Col>
      </Row>
      <br></br>
      <Box border={3} borderRadius={16}>
        <MaterialTable
          title="Car Information"
          icons={tableIcons}
          columns={state.columns}
          data={entries.data}
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
  );
}
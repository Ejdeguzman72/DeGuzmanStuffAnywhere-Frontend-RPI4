import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
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
import ExportAutoFinanceCSV from '../finance-page-component/auto-finance-page-components/ExportAutoFinanceCSV';
import { Col,Row } from 'react-bootstrap';
import RestaurantRecommendationsService from '../../services/RestaurantRecommendationsService';
import AddRestaurantModalComponent from './AddRestaurantModalComponent';
import RestaurantOptionsDropdown from '../dropdown-components/RestaurantOptionsDropdown';

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

export default function RestaurantRecommendationTableComponent() {
  const [state] = React.useState({
    columns: [
      { title: 'Restaurant ID', field: 'restaurantId', hidden: false },
      { title: 'Name', field: 'name' },
      { title: 'Address', field: 'address' },
      { title: 'City', field: 'city' },
      { title: 'State', field: 'state' },
      { title: 'Zip Code', field: 'zip'},
      { title: 'Restaurant Type', field: 'descr'}
    ],
  });

  const [entries, setEntries] = useState({
    data: [
      {
        restaurantId: 0,
        name: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        descr: "",
      }
    ]
  });

  const [fileName, setFileName] = useState("Restaurant Recommendations");

  useEffect(() => {
    RestaurantRecommendationsService.GetAllRestaurantRecommendations().then(response => {
      let data = [];
      response.data.list.forEach(e1 => {
        data.push({
          restaurantId: e1.restaurantId,
          name: e1.name,
          address: e1.address,
          city: e1.city,
          zip: e1.zip,
          state: e1.state,
          descr: e1.descr
        });
      });
      setEntries({ data: data })
    })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleRowAdd = (newData, resolve) => {
    RestaurantRecommendationsService.addRestaurantInformation(newData)
      .then(res => {
        let dataToAdd = [...entries.data]
        dataToAdd.push(newData);
        setEntries(dataToAdd)
        resolve();
        window.location.reload();
      })
  }

  const handleRowUpdate = (newData, oldData, resolve) => {
    RestaurantRecommendationsService.updateRestaurantInformation(oldData.restaurantId)
      .then(res => {
        const dataUpdate = [...entries.data];
        const index = oldData.tabledata.restaurantId;
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
    RestaurantRecommendationsService.deleteRestaurantInformation(oldData.restaurantId)
      .then(res => {
        const dataDelete = [...entries.data];
        const index = oldData.tableData.restaurantId;
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
          <AddRestaurantModalComponent />
        </Col>
        <Col md={4}>
          <RestaurantOptionsDropdown />
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
          title="Restaurant Recommendations"
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
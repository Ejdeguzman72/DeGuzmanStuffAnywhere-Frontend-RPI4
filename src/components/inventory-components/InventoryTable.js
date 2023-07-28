import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import MaterialTable from 'material-table';
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
import InventoryExportToCSV from './InventoryExportToCsv';
import AddInventoryModal from './AddInventoryModal';
import InventoryOptionsDropdown from '../dropdown-components/InventoryOptionsDropdown';

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

export default function InventoryTable() {
  const [entries, setEntries] = useState({
    data: [
      {
        inventoryId: 0,
        name: "",
        description: "",
        condition: "",
        location: "",
        quantity: 0
      }
    ]
  });

  const [state] = React.useState({
    columns: [
      { title: 'Inventory ID:', field: 'inventoryId', hidden: false},
      { title: 'name', field: 'name'},
      { title: 'Description', field: 'description'},
      { title: 'Condition', field: 'condition'},
      { title: 'Location', field: 'location'},
      { title: 'Quantity', field: 'quantity'}
    ]
  });

  useEffect(() => {
    Axios.get('http://localhost:8080/app/inventory/all').then(response => {
      let data = [];
      response.data.list.forEach(e1 => {
        data.push({
          inventoryId: e1.inventoryId,
          name: e1.name,
          description: e1.description,
          condition: e1.condition,
          location: e1.location,
          quantity: e1.quantity
        });
      });
      setEntries({ data: data });
    })
      .catch(function (error) {
        console.log(error);
      });
  }, []);


  const handleRowAdd = (newData, resolve) => {
    if (newData.name === null) {
      alert("name entry is required");
    }
    Axios.post('http://localhost:8080/app/inventory/add', newData)
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

  // const handleRowDelete = (data, resolve) => {
  //   Axios.delete(`http://localhost:8080/app/inventory/delete`, data)
  //     .then(res => {
  //       const dataDelete = [...entries.data];
  //       const index = data.tableData.personId;
  //       dataDelete.splice(index, 1);
  //       setEntries([...dataDelete]);
  //       resolve();
  //       window.location.reload();
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       resolve();
  //     });
  // }

  // const handleRowUpdate = (newData, oldData, resolve) => {
  //   Axios.put(`http://localhost:8080/app/person-info/person/${oldData.personId}`, newData)
  //     .then(res => {
  //       const dataUpdate = [...entries.data];
  //       const index = oldData.tabledata.personId;
  //       dataUpdate[index] = newData;
  //       setEntries([...dataUpdate]);
  //       resolve();
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       resolve();
  //       window.reload();
  //     });
  // }

  const [fileName, setFileName] = useState("Inventory");

  return (
    <div>
      <Row>
        <Col md={4}>
          <AddInventoryModal />
        </Col>
        <Col md={4}>
        <InventoryOptionsDropdown />
        </Col>
        <Col md={2}>
        </Col>
        <Col md={1}>
          <InventoryExportToCSV csvData={entries.data} fileName={fileName} />
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
            // onRowUpdate: (newData, oldData) =>
            //   new Promise((resolve) => {
            //     handleRowUpdate(newData, oldData, resolve)
            //   }),
            // onRowDelete: (oldData) =>
            //   new Promise((resolve) => {
            //     handleRowDelete(oldData, resolve)
            //   }),
          }}
        />
      </Box>
    </div>
  )
}

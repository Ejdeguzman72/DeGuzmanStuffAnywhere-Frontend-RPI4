import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import MaterialTable from 'material-table';
import UtilityTrackerService from '../../services/utility-tracker-service';
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
import ExportUtilityInformationCSV from './ExportUtilityInformationCSV';
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

export default function UtilityTableComponent() {

    const [entries, setEntries] = useState({
        data: [
            {
                utilityid: 0,
                name: "",
                phone: "",
                url: "",
                dueDate: 0,
                utilityType: ""
            }
        ]
    });

    const [fileName] = useState("Utility_Tracker_Information");

    const [state] = React.useState({
        columns: [
            { title: 'ID No:', field: 'utilityid', hidden: true },
            { title: 'Entity', field: 'name' },
            { title: 'Phone Number', field: 'phone' },
            { title: 'Website Link', field: 'url' },
            { title: 'Expected Due Date', field: 'dueDate' },
            { title: "Type Description", field: 'utilityType'}
        ]
    });

    useEffect(() => {
        UtilityTrackerService.getAllUtilityTrackerInformation().then(response => {
            let data = [];
            response.data.forEach(e1 => {
                data.push({
                    utilityid: e1.utilityid,
                    name: e1.name,
                    phone: e1.phone,
                    url: e1.url,
                    dueDate: e1.dueDate,
                    utilityType: e1.utilityType.utility_type_descr
                });
                console.log(data);
                //console.log(e1.utilityType.utility_type_descr);
            });
            setEntries({ data: data })
        })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const handleRowAdd = (newData, resolve) => {
        Axios.post(`http://localhost:8080/app/utility-information/add-utility-information`, newData)
        .then(res => {
            console.log(newData);
            let dataToAdd = [...entries.data];
            dataToAdd.push(newData);
            setEntries(dataToAdd);
            resolve();
            window.location.reload();
        })
        .catch(error => {
            console.log(error);
        });
    }

    const handleRowDelete = (oldData, resolve) => {
        Axios.delete(`http://localhost:8080/app/utility-information/utility/${oldData.utilityid}`)
        .then(res => {
            console.log(oldData.utilityid);
            let dataToDelete = [...entries.data];
            const index = oldData.tabledata.utilityid;
            dataToDelete.splice(index,1);
            setEntries([...dataToDelete]);
            resolve();
        })
        .catch(error => {
            console.log(error);
            resolve();
        })
    }

    const handleRowUpdate = (newData,oldData,resolve) => {
        Axios.put(`http://localhost:8080/app/utility-information/utility/${oldData.utilityid}`)
        .then(res => {
            console.log(oldData.utilityid);
            let dataToUpdate = [...entries.data];
            const index = oldData.tabledata.utilityid;
            dataToUpdate[index] = newData;
            setEntries([...dataToUpdate]);
            resolve();
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

        </Col>
        <Col md={4}>

        </Col>
        <Col md={2}>
            
        </Col>
        <Col md={2}>
          <ExportUtilityInformationCSV csvData={entries.data} fileName={fileName} />
        </Col>
      </Row>
      <br></br>
            <Box border={3} borderRadius={16}>
                <MaterialTable
                    title="Utility Tracker"
                    columns={state.columns}
                    icons={tableIcons}
                    data={entries.data}
                    editable={{
                        onRowAdd: (newData) =>
                          new Promise((resolve) => {
                            handleRowAdd(newData,resolve)
                          }),
                        onRowUpdate: (newData, oldData) =>
                          new Promise((resolve) => {
                            handleRowUpdate(newData,oldData,resolve)
                          }),
                        onRowDelete: (oldData) =>
                          new Promise((resolve) => {
                            handleRowDelete(oldData,resolve)
                          }),
                    }}
                />
            </Box>
        </div>
    );
}
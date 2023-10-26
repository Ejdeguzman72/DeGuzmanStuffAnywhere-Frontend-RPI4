import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import CardioTrackerService from '../../services/CardioTrackerService';
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
import AddCardioInfoModalComponent from './AddCardioInfoModalComponent';
import { Row, Col } from 'react-bootstrap';
import RunOptionsDropdown from '../dropdown-components/CardioOptionsDropdown';
import ExportBookToCSV from '../book-recommendations-component/ExportBookToCSV';

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

export default function CardioTrackerTableComponent() {

    const [entries, setEntries] = useState({
        data: [
            {
                cardioId: 0,
                cDate: "",
                cDistance: 0,
                cTime: 0,
                username: "",
                descr: ""
            }
        ]
    });

    const [state] = React.useState({
        columns: [
            { title: 'ID No:', field: 'cardioId', hidden: true },
            { title: 'Date', field: 'cDate' },
            { title: 'Distance', field: 'cDistance' },
            { title: 'Time', field: 'cTime' },
            { title: 'Name of User', field: 'username' },
            { title: 'Type', field: 'descr'}
        ]
    });

    const [fileName,setFileName] = useState("CARDIO_TRACKER")

    useEffect(() => {
        CardioTrackerService.getAllCardioTrackerInfo().then(response => {
            let data = [];
            response.data.list.forEach(e1 => {
                data.push({
                    cardioId: e1.cardioId,
                    cDate: e1.cDate,
                    cDistance: e1.cDistance.toFixed(2),
                    cTime: e1.cTime,
                    username: e1.username,
                    descr: e1.descr
                });
            });
            setEntries({ data: data })
        })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const handleRowDelete = (oldData, resolve) => {
        CardioTrackerService.deleteCardio(oldData.cardioId)
            .then(res => {
                let dataToDelete = [...entries.data];
                const index = oldData.tabledata.cardioId;
                dataToDelete.splice(index, 1);
                setEntries(dataToDelete);
                resolve();

                window.location.reload();
            })
            .catch(error => {
                console.log(error);
                resolve();

                window.location.reload();
            })
    }

    return (
        <div>
            <Row>
                <Col md={4}>
                    <AddCardioInfoModalComponent />
                </Col>
                <Col md={4}>
                    <RunOptionsDropdown />
                </Col>
                <Col md={2}>

                </Col>
                <Col md={2}>
                    <ExportBookToCSV csvData={entries.data} fileName={fileName} />
                </Col>
            </Row>
            <br></br>
            <Box border={3} borderRadius={16}>
                <MaterialTable
                    title="Cardio Tracker"
                    columns={state.columns}
                    icons={tableIcons}
                    data={entries.data}
                    editable={{
                        // onRowAdd: (newData) =>
                        //     new Promise((resolve) => {
                        //         handleRowAdd(newData, resolve)
                        //     }),
                        // onRowUpdate: (newData, oldData) =>
                        //     new Promise((resolve) => {
                        //         handleRowUpdate(newData, oldData, resolve)
                        //     }),
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
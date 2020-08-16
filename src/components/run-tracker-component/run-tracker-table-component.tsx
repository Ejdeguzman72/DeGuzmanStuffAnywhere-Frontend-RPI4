import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import runTrackerService from '../../services/run-tracker-service';

export default function RunTrackerTableComponent() {
    const [entries,setEntries] = useState({
        data: [
            {
                runid: 0,
                firstname: "",
                lastname: "",
                runDate: "",
                runDistance: 0,
                runTime: 0
            }
        ]
    });

    const [state] = React.useState({
        columns: [
            { title: 'ID No:', field: 'runid'},
            { title: 'First Name', field: 'firstname'},
            { title: 'Last Name', field: 'lastname'},
            { title: 'Date of Run', field: 'runDate'},
            { title: 'Distance', field: 'distance'},
            { title: 'Time', field: 'runTime'}
        ]
    });

    useEffect(() => {
        runTrackerService.getAllRunTrackerInfo().then(response => {
            let data: any = [];
            response.data.forEach((e1: any) => {
                data.push({
                    runid: e1.runid,
                    firstname: e1.firstname,
                    lastname: e1.lastname,
                    runDate: e1.runDate,
                    distance: e1.distance,
                    time: e1.runTime
                });
                console.log(data);
            });
            setEntries({ data: data})
        })
        .catch(function(error) {
            console.log(error);
        })
    }, []);


    return (
        <MaterialTable
          title="Run Tracker"
          columns={state.columns}
          data={entries.data}
          editable={{
            // onRowAdd: (newData) =>
            //   new Promise((resolve) => {
            //     setTimeout(() => {
            //       resolve();
            //       setState((prevState) => {
            //         const data = [...prevState.data];
            //         data.push(newData);
            //         return { ...prevState, data };
            //       });
            //     }, 600);
            //   }),
            // onRowUpdate: (newData, oldData) =>
            //   new Promise((resolve) => {
            //     setTimeout(() => {
            //       resolve();
            //       if (oldData) {
            //         setState((prevState) => {
            //           const data = [...prevState.data];
            //           data[data.indexOf(oldData)] = newData;
            //           return { ...prevState, data };
            //         });
            //       }
            //     }, 600);
            //   }),
            // onRowDelete: (oldData) =>
            //   new Promise((resolve) => {
            //     setTimeout(() => {
            //       resolve();
            //       setState((prevState) => {
            //         const data = [...prevState.data];
            //         data.splice(data.indexOf(oldData), 1);
            //         return { ...prevState, data };
            //       });
            //     }, 600);
            //   }),
          }}
        />
      );
}
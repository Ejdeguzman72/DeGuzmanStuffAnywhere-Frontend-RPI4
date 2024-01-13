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
import { Col,Row } from 'react-bootstrap';
import BookService from '../../services/BookService';
import AddBookRecommendation from './AddBookRecommendation';
import ExportBookToCSV from './ExportBookToCSV';
import BookOptionsDropdown from '../dropdown-components/BookOptionsDropdown';

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

export default function BookTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Book ID', field: 'bookId', hidden: true },
      { title: 'Title', field: 'title' },
      { title: 'Author', field: 'author' },
      { title: 'Description', field: 'descr' }
    ],
  });

  const [books, setBooks] = useState({
    data: [
      {
        bookId: 0,
        title: "",
        author: "",
        descr: ""
      }
    ]
  });

  const [fileName] = useState("Book_Recommendations");

  useEffect(() => {
    BookService.getAllBookInformation().then(response => {
      let data = [];
      response.data.list.forEach(e1 => {
        data.push({
          bookId: e1.bookId,
          title: e1.title,
          author: e1.author,
          descr: e1.descr
        });
        console.log(data);
      });
      setBooks({ data: data });
    })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const handleRowAdd = (newData, resolve) => {
    BookService.addBookInformation(newData)
      .then(res => {
        let dataToAdd = [...books.data];
        dataToAdd.push(newData);
        setBooks(dataToAdd);
        resolve();
        window.location.reload();
      });
  }

  const handleRowUpdate = (newData, oldData, resolve) => {
    Axios.put(`http://192.168.1.36:8080/app/books/add`,newData)
      .then(res => {
        const dataUpdate = [...books.data];
        const index = oldData.tabledata.bookId;
        dataUpdate[index] = newData;
        setBooks([...dataUpdate]);
        resolve();
      })
      .catch(error => {
        console.log(error);
        resolve();
      });
  }

  const handleRowDelete = (oldData, resolve) => {
    Axios.delete(`http://192.168.1.36:8080/app/books/delete`,oldData)
      .then(res => {
        const dataDelete = [...books.data];
        const index = oldData.tabledata.bookId;
        dataDelete.splice(index, 1);
        setBooks([...dataDelete]);
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
        <AddBookRecommendation />
        </Col>
        <Col md={4}>
          <BookOptionsDropdown />
        </Col>
        <Col md={2}>
          
        </Col>
        <Col md={1}>
          <ExportBookToCSV csvData={books.data} fileName={fileName} />
        </Col>
      </Row>
      <br></br>
    <Box border={3} borderRadius={16}> 
      <MaterialTable
        title="Books"
        columns={state.columns}
        data={books.data}
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
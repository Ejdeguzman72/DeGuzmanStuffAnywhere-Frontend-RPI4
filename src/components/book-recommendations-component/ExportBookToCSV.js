import React from 'react';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { Button } from 'react-bootstrap';
import '../../style-sheets/general-finance-page.css';

const ExportBookToCSV = ({csvData,fileName}) => {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = (csvdata,fileName) => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data']};
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array'});
        const data = new Blob([excelBuffer],  { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    }

    return (
        <Button variant="info" className="export-btn" size="lg" onClick={(e) => exportToCSV(csvData,fileName)} >Export CSV</Button>
    )
}

export default ExportBookToCSV;
import React from 'react';
import Button from 'react-bootstrap/Button';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import '../../../style-sheets/general-finance-page.css';

const ExportGeneralFinanceCSV = ({ csvData, fileName }) => {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = (csvData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob( [excelBuffer], { type: fileType });
        console.log(data + "this is data");
        FileSaver.saveAs(data, fileName + fileExtension);
    }

    return (
        <Button variant="info" size="lg" className="export-btn" onClick={(e) => exportToCSV(csvData, fileName)}>Export</Button>
    )
}

export default ExportGeneralFinanceCSV;
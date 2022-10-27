import React from 'react';
import { useState } from 'react';
import { Document, Page, page, } from 'react-pdf/dist/esm/entry.webpack';

const PDFFile = () => {
    const [numPage, setNumPage] = useState(null)
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({numPage}) =>{
        setNumPage(numPage)
        setPageNumber(1)
    }
    return (
        <div>
            <Document file='./CourseDetails.js' onLoadSuccess={onDocumentLoadSuccess}>
                <Page height='600' pageNumber={pageNumber}/>
            </Document>
        </div>
    );
};

export default PDFFile;
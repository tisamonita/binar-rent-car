import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import {Button} from 'reactstrap';

export default function ExamplePDF() {
  const [numPages, setNumPages] = useState(null); //jumlah total halaman
  const [pageNumber, setPageNumber] = useState(1); //current -> posisi halaman saat ini

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file="/HAN202009 Week 3 - Mathematical Expectation.pdf" 
      onLoadSuccess={onDocumentLoadSuccess} >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      <Button
      disabled={pageNumber<=1}
      onClick={()=>{setPageNumber(pageNumber-1)}}
      >Previous
      </Button>
      <Button
        disabled={pageNumber>=numPages}
       onClick={()=>{setPageNumber(pageNumber+1)}}
      >Next
      </Button>
    </div>
  );
}
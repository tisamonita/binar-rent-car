import { Viewer, Worker} from '@react-pdf-viewer/core';
import * as React from 'react';

const IndexPage = () => {
    return (
        <div
            style={{
                border: '1px solid rgba(0, 0, 0, .3)',
                display: 'flex',
                height: '50rem',
                margin: '5rem auto',
            }}
        >
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                <Viewer fileUrl="/S2-2021-422530-abstract.pdf" />
            </Worker>
       
        </div>
    );
};

export default IndexPage;
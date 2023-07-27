import { Worker } from '@react-pdf-viewer/core';
import React, { memo, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { toolbarPlugin, ToolbarSlot } from '@react-pdf-viewer/toolbar';


import '@react-pdf-viewer/core/lib/styles/index.css';

import ToolBarlayout from './ToolBarlayout';
import SpinnerFun from '../SpinnerFun/SpinnerFun';



const PDFViewer = () => {
    const location = useLocation();

    const [fileUrl, setFileUrl] = useState()
    const [pdf_password, setPdfPassword] = useState()

    const navigate = useNavigate()

    const currentUrl = window.location.href;
    const urlSegments = currentUrl.split('/');
    const urlLastSegment = urlSegments[urlSegments.length - 1]
    const urlLastSecSegment = urlSegments[urlSegments.length - 2]
    const urlLastThirSegment = urlSegments[urlSegments.length - 3]


    useEffect(
        () => {
            // console.log("urlSegments", urlSegments,urlLastSegment)
            if (location?.state?.encrypted_file_url) {
                setFileUrl(location.state.encrypted_file_url)
                setPdfPassword(location.state.pdf_password)
            }
            else {
                const data = JSON.parse(window.atob(localStorage.getItem('data')))
                console.log('data', window.atob(urlLastSecSegment))

                for (let i = 0; i < data.length; i++) {

                    if (data[i].node_id == window.atob(urlLastSecSegment)) {
                        console.log('PDFViewer', data[i].content.learn[0].content_data.content_info.video_id)
                        const FirstVideo = window.btoa(data[i].content.learn[0].content_data.content_info.video_id)
                        navigate(`/${urlLastThirSegment}/${urlLastSecSegment}/${FirstVideo}`)
                        break;
                    }
                }
            }
        }, [location]
    )


    // console.log('location under the PDF Viewer', location.state);

    const toolbarPluginInstance = toolbarPlugin();



    return (
        fileUrl
            ?
            <div>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <div
                        style={{
                            // border: '1px solid rgba(0, 0, 0, 0.3)',
                            display: 'flex',
                            flexDirection: 'column',
                            // height: '100%',
                        }}
                    >

                        <div
                            style={{
                                border: '1px solid rgba(0, 0, 0, 0.3)',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                            }}>

                            <ToolBarlayout toolbarPluginInstance={toolbarPluginInstance} />

                            <div
                                style={{
                                    height: '74vh',
                                    // width: '60vw'
                                }}
                            >
                                <Viewer
                                    fileUrl={fileUrl}
                                    renderProtectedView={(renderProps) => renderProps.verifyPassword(pdf_password)}
                                    plugins={[toolbarPluginInstance]}
                                    defaultScale={1}
                                // plugins={[defaultLayoutPluginInstance, searchPluginInstance, zoomPluginInstance, pagePluginInstance]}
                                />

                            </div>



                        </div>
                    </div>
                </Worker>
            </div>
            :
            <SpinnerFun />
    );
};

export default memo(PDFViewer);

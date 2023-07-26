import { Worker } from '@react-pdf-viewer/core';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Viewer, SpecialZoomLevel  } from '@react-pdf-viewer/core';
import { RenderGoToPageProps } from '@react-pdf-viewer/page-navigation';
import { toolbarPlugin, ToolbarSlot } from '@react-pdf-viewer/toolbar';
import { RenderCurrentScaleProps, RenderZoomInProps, RenderZoomOutProps } from '@react-pdf-viewer/zoom';
import { fullScreenPlugin, RenderEnterFullScreenProps, RenderExitFullScreenProps } from '@react-pdf-viewer/full-screen';
import { searchPlugin, RenderSearchProps } from '@react-pdf-viewer/search';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/toolbar/lib/styles/index.css';



const PDFViewer = () => {
    const location = useLocation();
    const fileUrl = location.state.encrypted_file_url;
    const pdf_password = location.state.pdf_password;


    console.log('location under the PDF Viewer', location.state);


    const toolbarPluginInstance = toolbarPlugin();
    const { Toolbar } = toolbarPluginInstance;

    return (
        <div>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                <div>

                    <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                        }}>
                        <div
                            style={{
                                alignItems: 'center',
                                backgroundColor: '#eeeeee',
                                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                                display: 'flex',
                                padding: '4px',
                            }}
                        >
                            <Toolbar>
                                {(props: ToolbarSlot) => {
                                    const {
                                        CurrentPageInput,
                                        CurrentScale,
                                        GoToNextPage,
                                        GoToPreviousPage,
                                        NumberOfPages,
                                        ZoomIn,
                                        ZoomOut,
                                        EnterFullScreen,
                                        Search                                     
                                        
                                    } = props;
                                    return (
                                        <>
                                            <div style={{ padding: '0px 2px' }}>
                                                <EnterFullScreen>
                                                {(props: RenderEnterFullScreenProps) => (
                                                        <button
                                                            style={{
                                                                backgroundColor: '#357edd',
                                                                border: 'none',
                                                                borderRadius: '4px',
                                                                color: '#ffffff',
                                                                cursor: 'pointer',
                                                                padding: '8px',
                                                                marginRight: '10px'
                                                            }}
                                                            onClick={props.onClick}
                                                        >
                                                            Full screen
                                                        </button>
                                                    )}
                                                </EnterFullScreen>

                                                <Search>
                                                {(props: RenderSearchProps) => (
                                                        <button
                                                            style={{
                                                                backgroundColor: '#357edd',
                                                                border: 'none',
                                                                borderRadius: '4px',
                                                                color: '#ffffff',
                                                                cursor: 'pointer',
                                                                padding: '8px',
                                                                marginRight: '10px'
                                                            }}
                                                            onClick={props.onClick}
                                                        >
                                                            Search
                                                        </button>
                                                    )}
                                                </Search>

                                                {/* <ExitFullScreen>
                                                {(props: RenderExitFullScreenProps) => (
                                                        <button
                                                            style={{
                                                                backgroundColor: '#357edd',
                                                                border: 'none',
                                                                borderRadius: '4px',
                                                                color: '#ffffff',
                                                                cursor: 'pointer',
                                                                padding: '8px',
                                                            }}
                                                            onClick={props.onClick}
                                                        >
                                                            Full screen
                                                        </button>
                                                    )}
                                                </ExitFullScreen> */}

                                                <ZoomOut>
                                                    {(props: RenderZoomOutProps) => (
                                                        <button
                                                            style={{
                                                                backgroundColor: '#357edd',
                                                                border: 'none',
                                                                borderRadius: '4px',
                                                                color: '#ffffff',
                                                                cursor: 'pointer',
                                                                padding: '8px',
                                                            }}
                                                            onClick={props.onClick}
                                                        >
                                                            Zoom out
                                                        </button>
                                                    )}
                                                </ZoomOut>
                                            </div>
                                            <div style={{ padding: '0px 2px' }}>
                                                <CurrentScale>
                                                    {(props: RenderCurrentScaleProps) => (
                                                        <span>{`${Math.round(props.scale * 100)}%`}</span>
                                                    )}
                                                </CurrentScale>
                                            </div>
                                            <div style={{ padding: '0px 2px' }}>
                                                <ZoomIn>
                                                    {(props: RenderZoomInProps) => (
                                                        <button
                                                            style={{
                                                                backgroundColor: '#357edd',
                                                                border: 'none',
                                                                borderRadius: '4px',
                                                                color: '#ffffff',
                                                                cursor: 'pointer',
                                                                padding: '8px',
                                                            }}
                                                            onClick={props.onClick}
                                                        >
                                                            Zoom in
                                                        </button>
                                                    )}
                                                </ZoomIn>
                                            </div>
                                            <div style={{ padding: '0px 2px', marginLeft: 'auto' }}>
                                                <GoToPreviousPage>
                                                    {(props: RenderGoToPageProps) => (
                                                        <button
                                                            style={{
                                                                backgroundColor: props.isDisabled ? '#96ccff' : '#357edd',
                                                                border: 'none',
                                                                borderRadius: '4px',
                                                                color: '#ffffff',
                                                                cursor: props.isDisabled ? 'not-allowed' : 'pointer',
                                                                padding: '8px',
                                                            }}
                                                            disabled={props.isDisabled}
                                                            onClick={props.onClick}
                                                        >
                                                            Previous page
                                                        </button>
                                                    )}
                                                </GoToPreviousPage>
                                            </div>
                                            <div style={{ padding: '0px 2px', width: '4rem' }}>
                                                <CurrentPageInput />
                                            </div>
                                            <div style={{ padding: '0px 2px' }}>
                                                / <NumberOfPages />
                                            </div>
                                            <div style={{ padding: '0px 2px' }}>
                                                <GoToNextPage>
                                                    {(props: RenderGoToPageProps) => (
                                                        <button
                                                            style={{
                                                                backgroundColor: props.isDisabled ? '#96ccff' : '#357edd',
                                                                border: 'none',
                                                                borderRadius: '4px',
                                                                color: '#ffffff',
                                                                cursor: props.isDisabled ? 'not-allowed' : 'pointer',
                                                                padding: '8px',
                                                            }}
                                                            disabled={props.isDisabled}
                                                            onClick={props.onClick}
                                                        >
                                                            Next page
                                                        </button>
                                                    )}
                                                </GoToNextPage>
                                            </div>
                                        </>
                                    );
                                }}
                            </Toolbar>
                        </div>


                        <div
                            style={{
                                // flex: 1,
                                // overflow: 'hidden',
                                height: '74vh',
                                // overflowY:'scroll'
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
    );
};

export default PDFViewer;

import React from 'react';
import { RenderGoToPageProps } from '@react-pdf-viewer/page-navigation';
import { RenderCurrentScaleProps, RenderZoomInProps, RenderZoomOutProps } from '@react-pdf-viewer/zoom';
import { fullScreenPlugin, RenderEnterFullScreenProps, RenderExitFullScreenProps } from '@react-pdf-viewer/full-screen';
import { searchPlugin, RenderSearchProps } from '@react-pdf-viewer/search';

import '@react-pdf-viewer/toolbar/lib/styles/index.css';

import { FiMaximize, FiSearch } from 'react-icons/fi'
import {  AiOutlineArrowRight, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import {LuArrowLeft} from 'react-icons/lu'
// import { toolbarPlugin } from '@react-pdf-viewer/toolbar';

const ToolBarlayout = ({ toolbarPluginInstance }) => {

    const iconSize = 25
    const color = 'black'

    const { Toolbar } = toolbarPluginInstance;

    return (
        <div
            style={{
                alignItems: 'center',
                justifyContent: "space-between",
                backgroundColor: '#F8F8F8',
                borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'row',
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

                            {/* <div style={{ padding: '0px 2px' }}>
                                <Search>
                                    {(props: RenderSearchProps) => (
                                        <button
                                            className='subject'
                                            style={{
                                            //     backgroundColor: '#357edd',
                                            //     border: 'none',
                                            //     borderRadius: '4px',
                                            //     color: '#ffffff',
                                            //     cursor: 'pointer',
                                            //     padding: '8px',
                                            //     marginRight: '10px'
                                            marginLeft: '3vh'
                                            }}
                                            onClick={props.onClick}
                                        >
                                            <FiSearch size={iconSize} color={`${color}`} />

                                        </button>
                                    )}
                                </Search> */}
                            {/* </div> */}

                            <div style={{
                                alignItems: 'center',
                                // justifyContent: "space-between",
                                // backgroundColor: '#F8F8F8',
                                // borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                                display: 'flex',
                                flexDirection: 'row',
                                // padding: '4px',
                                }}
                                >

                                <div style={{ padding: '0px 2px' }}>
                                    <ZoomOut>
                                        {(props: RenderZoomOutProps) => (
                                            <button
                                                className='subject'
                                                style={{
                                                    //     backgroundColor: '#357edd',
                                                    //     border: 'none',
                                                    //     borderRadius: '4px',
                                                    //     color: '#ffffff',
                                                    // cursor: 'pointer',
                                                    padding: '8px',
                                                }}
                                                onClick={props.onClick}
                                            >
                                                <AiOutlineMinus size={iconSize} color={`${color}`} />
                                            </button>
                                        )}
                                    </ZoomOut>
                                </div>

                                {/* <div style={{ padding: '0px 2px' }}>
                                    <CurrentScale>
                                        {(props: RenderCurrentScaleProps) => (
                                            <span>{`${Math.round(props.scale * 100)}%`}</span>
                                        )}
                                    </CurrentScale>
                                </div> */}

                                <div style={{ padding: '0px 2px' }}>
                                    <ZoomIn>
                                        {(props: RenderZoomInProps) => (
                                            <button
                                                className='subject'
                                                style={{
                                                    //     backgroundColor: '#357edd',
                                                    //     border: 'none',
                                                    //     borderRadius: '4px',
                                                    //     color: '#ffffff',
                                                    // cursor: 'pointer',
                                                    padding: '8px',
                                                }}
                                                onClick={props.onClick}
                                            >
                                                <AiOutlinePlus size={iconSize} color={`${color}`} />
                                            </button>
                                        )}
                                    </ZoomIn>
                                </div>
</div>
                                {/* <div style={{color:"#adadaddb"}}>|</div> */}
                                <div style={{
                                alignItems: 'center',
                                // justifyContent: "space-between",
                                // backgroundColor: '#F8F8F8',
                                // borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                                display: 'flex',
                                flexDirection: 'row',
                                // padding: '4px',
                                }}
                                >
                                <div style={{ padding: '0px 2px', display: "flex" }}>
                                    {/* <GoToPreviousPage>
                                    {(props: RenderGoToPageProps) => (
                                        <button
                                            className='subject'
                                            // style={{
                                            //     backgroundColor: props.isDisabled ? '#96ccff' : '#357edd',
                                            //     border: 'none',
                                            //     borderRadius: '4px',
                                            //     color: '#ffffff',
                                            //     cursor: props.isDisabled ? 'not-allowed' : 'pointer',
                                            //     padding: '8px',
                                            // }}
                                            disabled={props.isDisabled}
                                            onClick={props.onClick}
                                        >
                                            <LuArrowLeft />
                                        </button>
                                    )}
                                </GoToPreviousPage> */}
                                    {/* </div> */}
                                    <div style={{
                                        padding: '0px 0px',
                                        marginLeft: "10%",
                                        marginRight: "10%",
                                        width: '3rem'
                                    }}>
                                        <CurrentPageInput  />
                                    </div>

                                </div>

                                <div>/</div>

                                <div style={{ padding: '0px 2px' }}>
                                    <NumberOfPages />
                                </div>
                                </div>
                                {/* <div style={{ padding: '0px 2px' }}>
                                    <GoToNextPage>
                                        {(props: RenderGoToPageProps) => (
                                            <button
                                                className='subject'
                                                // style={{
                                                //     backgroundColor: props.isDisabled ? '#96ccff' : '#357edd',
                                                //     border: 'none',
                                                //     borderRadius: '4px',
                                                //     color: '#ffffff',
                                                //     cursor: props.isDisabled ? 'not-allowed' : 'pointer',
                                                //     padding: '8px',
                                                // }}
                                                disabled={props.isDisabled}
                                                onClick={props.onClick}
                                            >
                                                <AiOutlineArrowRight />
                                            </button>
                                        )}
                                    </GoToNextPage>
                                </div> */}


                                {/* <div> | </div> */}
                            {/* </div> */}

                            <div style={{ padding: '0px 2px' }} >
                                <EnterFullScreen>
                                    {(props: RenderEnterFullScreenProps) => (
                                        <button
                                            className='subject'
                                            style={{
                                                // justifyContent: "end",
                                                //     backgroundColor: '#357edd',
                                                //     border: 'none',
                                                //     borderRadius: '4px',
                                                //     color: '#ffffff',
                                                //     cursor: 'pointer',
                                                //     padding: '8px',
                                                    marginRight: '3vh'
                                            }}
                                            onClick={props.onClick}
                                        >
                                            <FiMaximize size={iconSize} color={`${color}`} />
                                        </button>
                                    )}
                                </EnterFullScreen>
                            </div>
                        </>
                    );
                }}
            </Toolbar >
        </div>
    );
};

export default ToolBarlayout;
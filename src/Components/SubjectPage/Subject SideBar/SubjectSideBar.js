import React from 'react';
import '../../../CSS/App.css'
import { useSelector } from 'react-redux';
import { OverlayTrigger } from 'react-bootstrap';
import Tooltip from 'react-bootstrap/Tooltip';
import { ChapterScroll } from '../../Functions/Services';

const SubjectSideBar = () => {

  console.log('SubjectSideBar')
  const content = useSelector(state => state.content)


  return (
    
            <div className=' SideBar HomeSideBar homeSide'>


        <div className='Logo_Image  '>
          {/* <div className='companyLogo' style={{background:'white'}}  /> */}
          
          <div className='logo_and_index'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
            <strong className='index'>Index</strong>
          </div>

        </div>

        <div className='tableHome HomeTable'>
          {
            content.map((data, index) => {
              return (
                ((data.content.learn).length > 0) ?
                  <React.Fragment key={index}>
                    <button onClick={() => { ChapterScroll(data.node_id) }} className='subject'>
                      <div className=''>
                        <div className='tableData'>
                          <OverlayTrigger className='OverlayTrigger' placement="top" delay={{ show: 250, hide: 400 }} overlay={<Tooltip id="tooltip">{data.display_name}</Tooltip>}>
                            <div className='menuBarcontentSvgs'>
                              {
                                // data.display_name.length < 15 ? 
                                data.display_name 
                                // : data.display_name.slice(0, 18) + '...'
                              }
                            </div>
                          </OverlayTrigger>
                        </div>
                      </div>

                    </button>
                  </React.Fragment>
                  :
                  null
              );
            }
            )
          }
        </div>
      </div>

  );
};

export default SubjectSideBar;
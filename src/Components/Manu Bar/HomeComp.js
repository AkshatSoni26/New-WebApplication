import React from 'react';
import NavBar from '../HomePage/NavBar/NavBar';
import SubjectCaural from '../HomePage/Corusal/SubjectCaural';
import SelectionCoursal from '../HomePage/Corusal/SelectionCoursal';
import FacultiCaursol from '../HomePage/Corusal/FacultiCaursol';
import { useNavigate } from 'react-router-dom';
import UserData from '../HomePage/UserData/UserData'

const HomeComp = () => {

    return (
        <div className='scrollView HomeBackPhoneview HomeScrollProb' style={{ overflowY: 'scroll' }}>
            <div className='ViewPortProblem'>
                <div className='HomeMainContent '>
                    <section >
                        <div className='userData' >
                            <UserData />
                        </div>
                    </section>

                    <section >
                        <div className='SubjectCaural'>
                            <SubjectCaural />
                        </div>
                    </section>

                </div>

                <section >
                    <div className='HomeMainFacultiContentPortion HomeMainFacultiContentPortionStyle'>
                        <FacultiCaursol />
                    </div>
                </section>

                <section >
                    <div className='HomeMainFacultiContentPortion HomeMainFacultiContentPortionStyle'>
                        <SelectionCoursal />
                    </div>
                </section>

            </div>
        </div>
    );
};

export default HomeComp;
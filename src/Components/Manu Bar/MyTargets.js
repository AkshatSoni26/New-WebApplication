import React from 'react';
import { BsClock } from 'react-icons/bs'

const MyTargets = ({ profile, but, but_name, symbol }) => {

    const enrollment = JSON.parse(localStorage.getItem('userData')).enrollments

    return (
        <div className='HomeMainContent' style={{ paddingBottom: "2%" }} >
            <div className='menuBarcontent MyAccount'>

                <div className='MyAccountHardCode'>
                    {symbol} {profile}
                </div>

                {
                    enrollment.map(
                        (data, index) => {
                            return (
                                <div className='MyProfile MyTarget'>

                                    <div className='Info' >
                                        <div className='name targetName'>
                                            {data.course_name} {data.phase_name}

                                            {
                                                data.is_current &&
                                                <div className='IsEnrolled'>
                                                    <div className='Enrolled'> Enrolled </div>
                                                </div>
                                            }
                                        </div>

                                        <div className='phoneNumber'>
                                            <div>
                                                Started on: {data.enroll_date}
                                            </div>
                                        </div>

                                        <div className='editBut subject'>
                                            <div className='pan'>
                                                <BsClock />  &nbsp;
                                            </div>
                                            <div className='Edit'>
                                                {but_name}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }

            </div>
        </div>

    );
};

export default MyTargets;
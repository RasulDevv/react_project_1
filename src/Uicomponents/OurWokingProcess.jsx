import React from 'react';
import { Link } from 'react-router-dom';

const OurWokingProcess = () => {
    return (
        <div className='md-d-none'>
            <p className='h3 m-auto m-10'>Our Working Process</p>
            <div className='d-flex justifyContent-center md-flexDirection-column w-87'>
                <button className='btnPrimarySmoke' to='/Register'>1</button>
                <hr className='hr' />
                <button className='btnPrimarySmoke'>2</button>
                <hr className='hr' />
                <button className='btnPrimarySmoke'>3</button>
                <hr className='hr' />
                <button className='btnPrimarySmoke'>4</button>
            </div>

            <div className='d-grid columns-4 grid-gap-10'>
                <div>
                    <h2 className=''>Register</h2>
                    <p>Enterprise defination is - a project or undertaking that</p>
                </div>
                <div>
                    <h2 className=''>Submit Resume</h2>
                    <p>Enterprise defination is - a project or undertaking that</p>
                </div>
                <div>
                    <h2 className=''>Search For a Job</h2>
                    <p>Enterprise defination is - a project or undertaking that</p>
                </div>
                <div>
                    <h2 className=''>Apply</h2>
                    <p>Enterprise defination is - a project or undertaking that</p>
                </div>
            </div>
        </div>
    );
};

export default OurWokingProcess;
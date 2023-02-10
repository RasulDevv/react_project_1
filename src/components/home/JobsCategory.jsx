import React from 'react';

const JobsCategory = ({rang,jobsNumber,jobName}) => {
    return (
        <div className='jobCategory'>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <div style={{width: '1rem', height: '1rem', background: `${rang}`, borderRadius: '5px'}}></div>
                <p className='jobCategoryP'> {jobName} <br/> </p>
            </div>

            <span style={{color: 'rgba(0, 0, 0, 0.508)', fontWeight: '500'}}>{jobsNumber} Jobs</span>
        </div>
    );
};

export default JobsCategory;
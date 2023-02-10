import React from 'react';
import { FaAddressCard } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';

const JobItem = ({companyWants,address,category,jobType,salary,setSortingAlert}) => {
    return (
        <div className='JobItem'>
            <div className='d-flex justifyContent-space-beetwen md-flexDirection-column'>
                <span className='JobItemSpan1'>{companyWants}</span>
                <p>2 hours ago</p>
            </div>
            <div className='d-flex justifyContent-space-beetwen md-flexDirection-column'>
                <div className='d-flex'>
                    <p><IoLocationSharp/> {address}</p>
                    <span className='kokroqDiv'>{category}</span>
                    <span className='kokroqDiv'>{jobType}</span>
                </div>
                <p><span className='md-estimatedSalary'>Estimated Salary:</span> <span className='estimatedSalary'>{salary}</span></p>
            </div>
        </div>
    );
};

export default JobItem;
import React from 'react';
import {FaMapMarkerAlt,FaMedapps} from 'react-icons/fa'


const CardOfJob = ({address,jobName,byWhom}) => {
    return (
        <div className='CardOfJob'>
            <p className='adressP'><FaMapMarkerAlt/> {address}</p>
            <p className='jobName'>{jobName}</p>
            <p><span>By</span> <span className='byWhom'>{byWhom}</span></p>
            <div className='d-flex justifyContent-space-beetwen'>
                <p><FaMedapps/> 1 Week ago</p>
                <button className='btnPrimary'>Apply Now</button>
            </div>
        </div>
    );
};

export default CardOfJob;
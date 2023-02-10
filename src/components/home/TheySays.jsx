import React from 'react';

const TheySays = ({lorem,imgSrc,personName,personJob,mb}) => {
    return (
        <div className={`TheySays ${mb}`}>
            <p>{lorem}</p>
            <div className='TheySaysDiv1'>
                <img className='theySaysImg' src={imgSrc} alt="png" />
                <div className='TheySaysDiv2'>
                    <p className='TheySaysP'>{personName}</p>
                    <p className='TheySaysP'>{personJob}</p>
                </div>
            </div>
        </div>
    );
};

export default TheySays;
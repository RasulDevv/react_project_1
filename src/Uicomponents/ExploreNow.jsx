import React from 'react';

const ExploreNow = ({dNone}) => {
    return (
        <div className={`exploreNowDiv ${dNone}`}>

            <div className='marginLeft-1'>
                <p className='pLocation'>Location</p>
                <p className='pBirbalo'>Enter Preferred location</p>
            </div>

            <div className='borderRight'></div>

            <div className='marginLeft-1'>
                <p className='pLocation'>Type</p>
                <p className='pBirbalo'>What kind of role do you want?</p>
            </div>

            <button className='slightlyBlueButton marginLeft-1'>Eplore Now</button>
        </div>
    );
};

export default ExploreNow;
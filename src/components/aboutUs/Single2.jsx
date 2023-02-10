import React from 'react';

const Single2 = ({K,p1,p2}) => {
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <p className='K p-10'>{K}</p>
            <div style={{lineHeight: '.4rem'}}>
                <p>{p1}</p>
                <p>{p2}</p>
            </div>
        </div>
    );
};

export default Single2;
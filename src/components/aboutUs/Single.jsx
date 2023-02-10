import React from 'react'; 

const Single = ({imgSrc,h3,p}) => {
    return (
        <div className='d-flex justifyContent-space-beetwen mb-10 md-bg-whiteSmoke'>
            <img className='w-20 md-w-15' src={imgSrc} alt='png' />
            <div className='ml-10'>
                <h4>{h3}</h4>
                <p style={{fontSize: '.9rem'}}>{p}</p>
            </div>
        </div>
    );
};

export default Single;
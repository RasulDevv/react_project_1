import React, { useState } from 'react';

const Categories = ({click,onChange,value1,name,value2,value3,value4,value5,value6,value7,value8,value9,value10,categories}) => {
    
    return (
        <>  
            <div onChange={onChange}>
                <input checked={categories === 'hotel'} value={value1} name={name} type='radio' id='in16' className='d-none' />
                <input checked={categories === 'restaurants'} value={value2} name={name} type='radio' id='in17' className='d-none' />
                <input checked={categories === 'beautySalons'} value={value3} name={name} type='radio' id='in18' className='d-none' />
                <input checked={categories === 'tradeCenters'} value={value4} name={name} type='radio' id='in19' className='d-none' />
                <input checked={categories === 'realEstate'} value={value5} name={name} type='radio' id='in20' className='d-none' />
                <input checked={categories === 'sportCoaches'} value={value6} name={name} type='radio' id='in21' className='d-none' />
                <input checked={categories === 'babySitting'} value={value7} name={name} type='radio' id='in22' className='d-none' />
                <input checked={categories === 'cleaning'} value={value8} name={name} type='radio' id='in23' className='d-none' />
                <input checked={categories === 'other'} value={value9} name={name} type='radio' id='in24' className='d-none' />
                <input checked={categories === 'all'} value={value10} name={name} type='radio' id='in25' className='d-none' />
            </div>

            <div className='d-flex direction-column'>
                <h2>Categories</h2>
                <label htmlFor='in25' className={`categoryButton `}>All</label>
                <label htmlFor='in16' className={`categoryButton `}>Hotel</label>
                <label htmlFor='in17' className={`categoryButton `}>Restaurants</label>
                <label htmlFor='in18' className={`categoryButton`}>Beauty Salons</label>
                <label htmlFor='in19' className={`categoryButton `}>Trade Centers</label>
                <label htmlFor='in20' className={`categoryButton `}>Real Estate</label>
                <label htmlFor='in21' className={`categoryButton `}>Sports Coaches</label>
                <label htmlFor='in22' className={`categoryButton `}>Babysitting</label>
                <label htmlFor='in23' className={`categoryButton `}>Cleaning</label>
                <label htmlFor='in24' className={`categoryButton `}>Other</label>
            </div>
        </>
    );
};

export default Categories;
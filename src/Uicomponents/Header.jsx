import React from 'react';
import Navbar from './Navbar';
import '../index.css'
import ExploreNow from './ExploreNow';


const Header = ({p,h1,human,dNone,orqaFonOpshiyHeader,orqaFonOpshiyHeader2,height}) => {
    return (
        <div className={`w-87 m-auto ${orqaFonOpshiyHeader} ${orqaFonOpshiyHeader2} ${height}`}>
            <div className='header'>
            <div className='headerDiv1'>
                <p className='h1'>{h1}</p>
                <p className='p'>{p}</p>
            </div>

            <div className='image'>
                {/* <img className='img' src={human} alt='png' /> */}
            </div>
            
            </div>

            <ExploreNow dNone={dNone} />
        </div>
    );
};

export default Header;
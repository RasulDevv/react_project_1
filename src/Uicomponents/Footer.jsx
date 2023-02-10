import React from 'react';
import { AiOutlineTwitter } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa';
import {GrFacebookOption} from 'react-icons/gr'
import Navbar from './Navbar';

const Footer = () => {
    return (
        <div className='Footer text-center'>
            <div className='FooterDiv1'>
                <h1 className='FooterH1'>Subscribe to get instant job alerts</h1>
                <p className='FooterP'>Don't wanna miss something? Subscribe right now and get secial promtion and monthly newsletter</p>
            </div>
            <form className='FooterForm md-d-none'>
                <input className='FooterInput' type='text' placeholder='Enter your email address' />
                <button type='submit' className='slightlyBlueButton'>Explore Now</button>
            </form>
            <Navbar/>
            <div className='socialMediaLinks'>
                <a className='socialMediaLinksA' href='#'><FaInstagram/></a>
                <a className='socialMediaLinksA' href="#"><AiOutlineTwitter/></a>
                <a className='socialMediaLinksA' href="#"><GrFacebookOption/></a>
            </div>
        </div>
    );
};

export default Footer;
import React, {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { AlertContext } from '../App';

const Navbar = ({setAlert}) => {
    const alert = useContext(AlertContext)

    if(alert){
        return <nav className='nav w-87 m-auto md-nav1'>
                <Link className='text-decoration-none md-color-black md-m-10' to='/'>LOGO</Link>
                
                <div className='linksOfDiv1 md-d-none'>
                    <Link className='text-decoration-none marginOfLinks linksOfColor md-m-10' to='/'>Home</Link>
                    <Link className='text-decoration-none marginOfLinks linksOfColor md-m-10' to='/AboutUs'>About Us</Link>
                    <Link className='text-decoration-none marginOfLinks linksOfColor md-m-10' to='/OurJobs'>Our Jobs</Link>
                    <Link className='text-decoration-none marginOfLinks linksOfColor md-m-10' to='/Testimonials'>Testimonials</Link>
                    <Link className='text-decoration-none marginOfLinks linksOfColor md-m-10' to='/ContactUs'>Contact Us</Link>
                </div>

                <div className='linksOfDiv2'>
                    <Link className='text-decoration-none marginOfLinks md-m-10 md-color-black' to='SignIn'>Sign In</Link>
                    <Link className='text-decoration-none slightlyBlueButton md-m-10' to='Register'>Register</Link>
                </div>
            </nav>
    }

    return (
        <nav onClick={() => setAlert(prev => !prev)} className='md-nav md-bg-black'>
            <div className='linksOfDiv1'>
                <Link className='text-decoration-none marginOfLinks linksOfColor md-m-10' to='/'>Home</Link>
                <Link className='text-decoration-none marginOfLinks linksOfColor md-m-10' to='/AboutUs'>About Us</Link>
                <Link className='text-decoration-none marginOfLinks linksOfColor md-m-10' to='/OurJobs'>Our Jobs</Link>
                <Link className='text-decoration-none marginOfLinks linksOfColor md-m-10' to='/Testimonials'>Testimonials</Link>
                <Link className='text-decoration-none marginOfLinks linksOfColor md-m-10' to='/ContactUs'>Contact Us</Link>
            </div>
        </nav>
    );
};

export default Navbar;
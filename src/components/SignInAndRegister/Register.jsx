import React from 'react';
import image777 from '../../img/image777.png'

const Register = () => {
    return (
        <div className='bg-white d-flex'>
            <img className='imgForSignIn md-d-none' src={image777} alt="" />
            <div className='p-10'>
                <h1>Register</h1>
                <p>No credit card required</p>

                <form className='d-flex flexDirection-column'>
                    <label htmlFor="nameForRegister" className='mt-5'>Name *</label>
                    <input type='text' className='inputForSignIn'/>
                    <label htmlFor="nameForRegister" className='mt-5'>Email *</label>
                    <input type='email' className='inputForSignIn'/>
                    <label htmlFor="nameForRegister" className='mt-5'>Password *</label>
                    <input type='password' className='inputForSignIn'/>
                    <label htmlFor="nameForRegister" className='mt-5'>Confirm Password *</label>
                    <input type='text' className='inputForSignIn'/>
                    <button className='mt-5 btnForSignIn'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Register;
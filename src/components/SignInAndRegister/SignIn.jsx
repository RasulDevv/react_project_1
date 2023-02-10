import React from 'react';
import Bitmap from '../../img/Bitmap.png'

const SignIn = () => {
    return (
        <div className='bg-white d-flex'>
            <img src={Bitmap} alt="png" className='imgForSignIn md-d-none' />
            <div className='p-10 '>
                <h1>Sign In</h1>
                <p>Enter your account detailes below</p>
                <form className='d-flex flexDirection-column mt-10 w-100 m-auto'>
                    <label htmlFor="emailForSignIn" className='mt-5'>Email</label>
                    <input type="email" id='emailForSignIn' className='inputForSignIn' />
                    <label htmlFor="passwordForSignIn" className='mt-5'>Password</label>
                    <input type="password" id='passwordForSignIn' className='inputForSignIn' />
                    <button className='mt-5 btnForSignIn'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;
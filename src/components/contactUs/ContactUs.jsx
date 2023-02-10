import React from 'react';
import Header from '../../Uicomponents/Header';
import boyLaptop from '../../img/boyLaptop.png'
import '../../styles/ContactUs.css'

const ContactUs = () => {
    return (
        <div>
            <img className='imageForContactUs' src={boyLaptop} alt='png' />
            <Header height='mb-10' orqaFonOpshiyHeader2='orqaFonOpshiyHeader2' orqaFonOpshiyHeader='orqaFonOpshiyHeaderAboutUs'  h1='Contact Us' p='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' dNone='d-none md-d-none' />
            <div className='bg-white LeaveYourMessageHere'>
                <h1 className='text-center'>Leave Your Message Here</h1>
                <form className='LeaveYourMessageHereForm'>
                    <div className='w-50 md-w-100 m-auto LeaveYourMessageHereFormDiv'>
                        <div className='d-grid columns-2 m-auto col-md-1 md-w-100'>
                            <div className='d-flex flexDirection-column'>
                                <label htmlFor="contactName">Your Name*</label>
                                <input type='text' id='contactName' className='p-5 inputForContactUs1' />
                            </div>
                            <div className='d-flex flexDirection-column'>
                                <label htmlFor="contactEmail">Your Email*</label>
                                <input type='email' id='contactEmail' className='p-5 inputForContactUs1' />
                            </div>
                        </div>

                        <div className='d-flex flexDirection-column mt-5'>
                            <label htmlFor="contactSubject">Subject</label>
                            <input type='text' id='contactSubject' className='inputForContactUs1' />
                        </div>

                        <div className='d-flex flexDirection-column mt-5'>
                            <label htmlFor="yourMessage">Your Message*</label>
                            <textarea id="yourMessage" className='inputForContactUs1 yourMessageinputForContactUs1'></textarea>
                        </div>
                        
                        <p className='text-center'><button type='submit' className='mt-5 btnForContactUs'>Submit</button></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
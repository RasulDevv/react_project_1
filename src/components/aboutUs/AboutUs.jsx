import React from 'react';
import '../../styles/AboutUs.css'
import Header from '../../Uicomponents/Header'
import Logos from '../../Uicomponents/Logos'
import womanAboutUs from '../../img/womanAboutUs.png'
import boy1AboutUs from '../../img/boy1AboutUs.png'
import boy2AboutUs from '../../img/boy2AboutUs.png'
import hair_styling from '../../img/hair_styling.png'
import image9 from '../../img/image9.png'
import image10 from '../../img/image10.png'
import image11 from '../../img/image11.png'
import Group299 from '../../img/Group299.png'
import Single from './Single';
import Group304 from '../../img/Group304.png'
import OurWokingProcess from '../../Uicomponents/OurWokingProcess';
import Single2 from './Single2';




const AboutUs = () => {
    return (
        <div>
            <img className='womanAboutUsPng' src={womanAboutUs} alt='png' />
            <Header orqaFonOpshiyHeader2='orqaFonOpshiyHeader2' orqaFonOpshiyHeader='orqaFonOpshiyHeaderAboutUs'  h1='About Us' p='Lorem Ipsum is simply dummy text of the printing and typesetting industry.' dNone='d-none md-d-none' />
            <div className='bg-white'>
                <Logos/>
                <div className='w-87 m-auto'>
                    <h1>Who We Are</h1>
                    <div className='d-flex line-h-1 justifyContent-space-beetwen md-flexDirection-column'>
                        <div className='md-mb-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                        <div className='ml-5 md-ml-0'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
                    </div>
                </div>

                <div className='bg-whiteSmoke pt-10 pb-10 mt-10 mb-10'>
                    <p className='text-center'><img className='w-90 md-w-95 m-auto' src={Group299} alt='png' /></p>
                </div>


                <div className='d-grid columns-3 w-87 m-auto col-md-1 col-sm-2'>
                    <Single imgSrc={Group304} h3='Browse Hundrens Of Jobs' p='A team of experts passionate about product management' />
                    <Single imgSrc={Group304} h3='Browse Hundrens Of Jobs' p='A team of experts passionate about product management' />
                    <Single imgSrc={Group304} h3='Browse Hundrens Of Jobs' p='A team of experts passionate about product management' />
                    <Single imgSrc={Group304} h3='Browse Hundrens Of Jobs' p='A team of experts passionate about product management' />
                    <Single imgSrc={Group304} h3='Browse Hundrens Of Jobs' p='A team of experts passionate about product management' />
                    <Single imgSrc={Group304} h3='Browse Hundrens Of Jobs' p='A team of experts passionate about product management' />
                </div>

                <div className='bg-whiteSmoke pb-10'>
                    <div className='w-87 m-auto d-flex'>
                        <OurWokingProcess/>
                    </div>
                </div>

                <div className='d-flex justifyContent-space-beetwen w-87 m-auto Single2 md-flex-wrap'>
                    <Single2 K='30K+' p1='Active' p2='Users' />
                    <Single2 K='30K+' p1='Active' p2='Users' />
                    <Single2 K='30K+' p1='Active' p2='Users' />
                    <Single2 K='30K+' p1='Active' p2='Users' />
                </div>
                
            </div>
        </div>
    );
};

export default AboutUs;